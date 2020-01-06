import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, empty, Observable} from 'rxjs';
import {filter} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ProgramDataService {
  private programsSubject = new BehaviorSubject([]);

  constructor(private client: HttpClient) {}

  get programs(): Observable<any[]> {
    return this.programsSubject.asObservable();
  }

  // This service manages the filter parameters for program data.
  //
  // Each application (apply) of the filter will refresh the data,
  // based on filter data, from OpenData.
  //

  applyFilter(
      types: string[], districts: string[], primaryFunctions: string[],
      begin: string, end: string, zipCodes: string[]) {
    // build a filter based on input
    // if there are no values for a given parameter, treat that as not filtered
    // at all

    let filters: string[] = [
      this.makeTypeFilter(types),
      this.makePrimaryFunctionFilter(primaryFunctions),
      this.makeDateFilter(begin, end),
      this.makeEventCouncilDistrictFilter(districts),
      this.makeZipCodeFilter(zipCodes)
    ];

    const fp = filters.filter(f => !!f).join(' AND ');

    console.log(fp);
    this.client
        .get<any[]>(
            `https://data.kcmo.org/resource/4j37-ebgz.json?$query= select 'program' as datatype, primary_function as tp,
            organization || ' ' || organization_address || ', ' || organization_city
            || ', ' || organization_state || ', ' || organization_zip as org_info,
            event_project_title as name, event_project_description as description,
            activity_address || ', ' || activity_zip as address,
            geocoded_column, activity_coordinates
              where ${fp}`)
        .subscribe(d => {
          this.programsSubject.next(d.map(this.addLatLng).filter(p => !!p));
        });
  }

  private addLatLng(p: any): any {
    if (!!p.activity_coordinates) {
      const z = p.activity_coordinates.split(' ');
      p.lat = z[0];
      p.lng = z[1];
    } else if (!!p.geocoded_column) {
      p.lat = p.geocoded_column.coordinates[1];
      p.lng = p.geocoded_column.coordinates[0];
    }
    if (!p.lat || !p.lng) {
      return undefined;
    }
    return p;
  }

  private makeDateFilter(begin: string, end: string): string {
    if (begin && end) {
      return `event_project_start_date between '${begin}' and '${end}'`;
    }
    return undefined;
  }

  private makeTypeFilter(types: any[]): string {
    if (types && types.length > 0) {
      return `type in (${types.map(z => `'${z}'`).join(',')})`;
    }
    return undefined;
  }

  private makeZipCodeFilter(zipCodes:any[]): string {
    if(zipCodes && zipCodes.length > 0){
      return `activity_zip in (${zipCodes.map(z => `'${z}'`).join(',')})`
    }
    return undefined;
  }

  private makeEventCouncilDistrictFilter(districts: any[]): string {
    if (districts && districts.length > 0) {
      const filter =
          districts.map(z => `contains(event_council_district,'${z}')`)
              .join(' OR ');
      return `(${filter})`;
    }
    return undefined;
  }

  private makePrimaryFunctionFilter(pf: any[]): string {
    if (pf && pf.length > 0) {
      return `primary_function in (${pf.map(z => `'${z}'`).join(',')})`;
    }
    return undefined;
  }

  getTypes(): Observable<any[]> {
    return this.client.get<any[]>(
        'https://data.kcmo.org/resource/4j37-ebgz.json?$select=distinct%20type');
  }

  getPrimaryFunctions(): Observable<any[]> {
    return this.client.get<any[]>(
        'https://data.kcmo.org/resource/4j37-ebgz.json?$select=distinct%20primary_function');
  }

  getCouncilDistricts(): Observable<any[]> {
    return this.client.get<any[]>(
        'https://data.kcmo.org/resource/4j37-ebgz.json?$select=distinct%20event_council_district');
  }

  getZipCodes(): Observable<any[]> {
    return this.client.get<any[]>(
        'https://data.kcmo.org/resource/4j37-ebgz.json?$select=distinct%20activity_zip');
    }
}
