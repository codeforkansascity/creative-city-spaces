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
      begin: string, end: string) {
    // build a filter based on input
    // if there are no values for a given parameter, treat that as not filtered
    // at all

    let filters: string[] = [
      this.makeTypeFilter(types),
      this.makePrimaryFunctionFilter(primaryFunctions),
      this.makeDateFilter(begin, end),
    ];

    const fp = filters.filter(f => !!f).join(' AND ');

    console.log(fp);
    this.client
        .get<any[]>(
            `https://data.kcmo.org/resource/4j37-ebgz.json?$query= select * where ${
                fp}`)
        .subscribe(d => {
          this.programsSubject.next(d.map(this.addLatLng));
        });
  }

  private addLatLng(p: any): any {
    if (!!p.geocoded_column) {
      p.lat = p.geocoded_column.coordinates[1];
      p.lng = p.geocoded_column.coordinates[0];
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

  // setEventCouncilDistrictFilter(ecd: any[]) {
  //   if (ecd && ecd.length > 0) {
  //     this.ecdFilter = `event_council_district in (${ecd.join(',')})`;
  //   } else {
  //     this.ecdFilter = undefined;
  //   }
  //   this.executeQuery();
  // }

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
}
