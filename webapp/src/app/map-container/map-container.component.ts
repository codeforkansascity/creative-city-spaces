import {animate, style, transition, trigger} from '@angular/animations';
import {Component, OnInit} from '@angular/core';
import {filter} from 'rxjs/operators';
import {DataPointsService} from '../data-points.service';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss'],
  animations: [trigger(
      'slideInOut',
      [
        transition(
            ':enter',
            [animate('1200ms ease-in', style({transform: 'translateX(0%)'}))]),
        transition(':leave', [animate(
                                 '1200ms ease-out',
                                 style({transform: 'translateX(100%)'}))])
      ])]
})
export class MapContainerComponent implements OnInit {
  points: any[];
  selected: any = undefined;

  constructor(private dp: DataPointsService) {}

  ngOnInit() {
    this.dp.points.pipe(filter(p => p !== undefined || p !== null))
        .subscribe(p => {
          this.points = p;
        });

    this.dp.programs.pipe(filter(p => p !== undefined || p !== null))
        .subscribe(p => {
          this.points = p;
        });
  }

  select(p) {
    this.selected = p;
  }
  clearSelection() {
    this.selected = undefined;
  }

  showDetails(): boolean {
    return this.selected !== undefined;
  }
}
