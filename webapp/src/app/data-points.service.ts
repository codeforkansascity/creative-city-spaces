import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataPointsService {
  constructor(private client: HttpClient) {}

  getDataPoints(type: string): Observable<any> {
    return this.client.get<any>(
        `https://data.kcmo.org/resource/6x5f-7sf4.json?type=${type}`);
  }

  getDistinctTypes(): Observable<any> {
    return this.client.get<any>(
        ' https://data.kcmo.org/resource/6x5f-7sf4.json?$select=distinct type');
  }

  getFilteredOnTypes(types: string[]): Observable<any> {
    return this.client.get<any>(
        `https://data.kcmo.org/resource/6x5f-7sf4.json?$where=type in (${
            types.map(z => `'${z}'`)})`);
  }
}
