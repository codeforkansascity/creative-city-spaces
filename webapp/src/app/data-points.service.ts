import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {isEmpty} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataPointsService {
  private filters: string[];
  private pointsSubject = new BehaviorSubject(null);
  private programsSubject = new BehaviorSubject(null);

  constructor(private client: HttpClient) {}

  get points(): Observable<any[]> {
    return this.pointsSubject.asObservable();
  }

  get programs(): Observable<any[]> {
    return this.programsSubject.asObservable();
  }

  applyFilters(filters: string[]) {
    this.filters = filters;
    if (filters.length < 1) {
      this.pointsSubject.next([]);
    } else {
      this.client
          .get<any>(
              `https://data.kcmo.org/resource/6x5f-7sf4.json?$where=type in (${
                  filters.map(z => `'${z}'`)})`)
          .subscribe(data => {
            this.pointsSubject.next(data.map(this.addLatLng));
          });
    }
  }

  private addLatLng(p): any {
    const z = p.coordinates.split(' ');
    p.lat = z[0];
    p.lng = z[1];
    return p;
  }
  private addLatLng2(p): any {
    if (!p.activity_coordinates) {
      return p;
    }
    const z = p.activity_coordinates.split(' ') || [0, 0];
    p.lat = z[0];
    p.lng = z[1];
    return p;
  }


  getDistinctTypes(): Observable<any> {
    return this.client.get<any>(
        'https://data.kcmo.org/resource/6x5f-7sf4.json?$select=distinct type');
  }

  getPrograms(type: string) {
    return this.client
        .get<any>(
            `https://data.kcmo.org/resource/4j37-ebgz.json?$where=type in (${
                type})`)
        .subscribe(data => {
          this.programsSubject.next(data.map(this.addLatLng2));
        });
  }

  // tslint:disable-next-line: max-line-length
  // https://data.kcmo.org/resource/4j37-ebgz.json?$where=type=%27Annual%27%20and%20event_project_start_date%20%3E%20%272019-04-19T00:00:00.000%27

  // distinct program types
  // https://data.kcmo.org/resource/4j37-ebgz.json?$select=distinct%20type

  // distinct event council districts
  // https://data.kcmo.org/resource/4j37-ebgz.json?$select=distinct%20event_council_district

  // distinct primary function
  // https://data.kcmo.org/resource/4j37-ebgz.json?$select=distinct%20primary_function

  // Need to develop logic that will allow the user to dynamically change the
  // program filter. This should allow them to select zero or more filter
  // elements from each category. If nothing is selected, that particular filter
  // will not be applied

  // The date function should be a range.
  // * Should this have a default if not specified? For example, the default
  // configuration will be current day for 365 days?
}
