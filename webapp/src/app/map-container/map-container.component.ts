import {Component, OnInit} from '@angular/core';
import {filter} from 'rxjs/operators';

import {DataPointsService} from '../data-points.service';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss']
})
export class MapContainerComponent implements OnInit {
  points: any[];

  constructor(private dp: DataPointsService) {}

  ngOnInit() {
    this.dp.points.pipe(filter(p => p !== undefined || p !== null))
        .subscribe(p => {
          this.points = p;
        });
  }
}
