import {Component, OnInit} from '@angular/core';
import {empty, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {DataPointsService} from '../data-points.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  points: [any];
  interestTypes: [any];
  filters: string[] = [];


  constructor(private dp: DataPointsService) {}

  ngOnInit() {
    this.dp.getDistinctTypes().subscribe(d => this.interestTypes = d);
  }

  refreshPoints(ev) {
    this.dp.getDataPoints(ev.value).subscribe(d => {
      this.points = d.map(this.addLatLng);
    });
  }

  toggleFilter(type: string, checked: boolean) {
    if (!checked) {
      const idx = this.filters.indexOf(type);
      if (idx > -1) {
        this.filters.splice(idx, 1);
      }
    } else {
      this.filters.push(type);
    }
    if (this.filters.length < 1) {
      this.points = undefined;
    } else {
      this.dp.getFilteredOnTypes(this.filters).subscribe(d => {
        this.points = d.map(this.addLatLng);
      });
    }
  }

  private addLatLng(p): any {
    let z = p.coordinates.split(' ');
    p.lat = z[0];
    p.lng = z[1];
    return p;
  }
}
