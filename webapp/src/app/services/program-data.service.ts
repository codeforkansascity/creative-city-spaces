import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, empty, Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProgramDataService {
  private programsSubject = new BehaviorSubject([]);
  private typeFilter: string;
  private ecdFilter: string;
  private pfFilter: string;
  private dateFilter: string;

  constructor(private client: HttpClient) {}

  get programs(): Observable<any[]> {
    return this.programsSubject.asObservable();
  }

  // This service manages the filter parameters for program data.
  //
  // Each application (apply) of the filter will refresh the data,
  // based on filter data, from OpenData.
  //

  setTypeFilter(types: any[]) {
    if (types && types.length > 0) {
      this.typeFilter = `type in (${types.map(z => `'${z}'`).join(',')})`;
    } else {
      this.typeFilter = undefined;
    }
    this.executeQuery();
  }

  setEventCouncilDistrictFilter(ecd: any[]) {
    if (ecd && ecd.length > 0) {
      this.ecdFilter = `event_council_district in (${ecd.join(',')})`;
    } else {
      this.ecdFilter = undefined;
    }
    this.executeQuery();
  }

  setPrimaryFunctionFilter(pf: any[]) {
    if (pf && pf.length > 0) {
      this.pfFilter =
          `primary_function in (${pf.map(z => `'${z}'`).join(',')})`;
    } else {
      this.pfFilter = undefined;
    }
    this.executeQuery();
  }

  setDateFilter(begin: Date, end: Date) {
    if (begin && end) {
      this.dateFilter = `event_project_start_date between ${begin} and ${end}`;
    } else {
      this.dateFilter = undefined;
    }
    this.executeQuery();
  }


  private executeQuery() {
    // construct the query based on specified filters
    // and update programsSubject with the results.
    // ** The returned data needs to be mapped to a common data object.

    let filters = [];
    if (this.typeFilter) {
      filters.push(this.typeFilter);
    }
    if (this.ecdFilter) {
      filters.push(this.ecdFilter);
    }
    if (this.pfFilter) {
      filters.push(this.pfFilter);
    }
    if (this.dateFilter) {
      filters.push(this.dateFilter);
    }

    filters.join(' AND ');

    this.client
        .get<any[]>(
            `https://data.kcmo.org/resource/4j37-ebgz.json?$query= select * where ${
                filters.join(' And ')}`)
        .subscribe(d => {
          this.programsSubject.next(d);
        });
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
