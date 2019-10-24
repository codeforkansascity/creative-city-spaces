import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {isEmpty} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataPointsService {
  private filters: string[];
  private pointsSubject = new BehaviorSubject(null);

  constructor(private client: HttpClient) {}

  get points(): Observable<any[]> {
    return this.pointsSubject.asObservable();
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
    let z = p.coordinates.split(' ');
    p.lat = z[0];
    p.lng = z[1];
    return p;
  }

  getDistinctTypes(): Observable<any> {
    return this.client.get<any>(
        'https://data.kcmo.org/resource/6x5f-7sf4.json?$select=distinct type');
  }

  getDistinctProgramTypes(): Observable<any> {
    return this.client.get<any>(
        'https://data.kcmo.org/resource/4j37-ebgz.json?$select=distinct%20type');
  }
}
