import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {isEmpty} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataPointsService {
  private filters: string[];
  private pointsSubject = new BehaviorSubject([]);

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
              `https://data.kcmo.org/resource/6x5f-7sf4.json?$query=select 'place' as datatype,
                  type as tp, name, description, address, contact_information,
                  geocoded_column,coordinates
                  where type in (${filters.map(z => `'${z}'`)})`)
          .subscribe(data => {
            this.pointsSubject.next(data.map(this.addLatLng).filter(p => !!p));
          });
    }
  }

  private addLatLng(p): any {
    const z = p.coordinates.split(' ');
    p.lat = z[0];
    p.lng = z[1];

    if (!p.lat || !p.lng) {
      return undefined;
    }
    return p;
  }

  getDistinctTypes(): Observable<any> {
    return this.client.get<any>(
        'https://data.kcmo.org/resource/6x5f-7sf4.json?$select=distinct type');
  }
}
