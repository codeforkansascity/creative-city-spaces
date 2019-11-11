import {animate, style, transition, trigger} from '@angular/animations';
import {Component, OnInit} from '@angular/core';
import {filter} from 'rxjs/operators';

import {DataPointsService} from '../services/data-points.service';
import {ProgramDataService} from '../services/program-data.service';


@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss'],
  // animations: [trigger(
  //     'slideInOut',
  //     [
  //       transition(
  //           ':enter',
  //           [animate('1200ms ease-in', style({transform:
  //           'translateX(0%)'}))]),
  //       transition(':leave', [animate(
  //                                '1200ms ease-out',
  //                                style({transform: 'translateX(100%)'}))])
  //     ])]
})
export class MapContainerComponent implements OnInit {

  constructor(private dp: DataPointsService, private pds: ProgramDataService) {}
  points: any[];
  selected: any = undefined;

  private _mapIcons = {
    attractions: {
      url: 'assets/map-pins/mp_yellow.svg',
      scaledSize: { width: 30, height: 30 }
    },
    fountains: {
      url: 'assets/map-pins/mp_turquoise.svg',
      scaledSize: { width: 30, height: 30 }
    },
    museums: {
      url: 'assets/map-pins/mp_orange.svg',
      scaledSize: { width: 30, height: 30 }
    },
    'public art': {
      url: 'assets/map-pins/mp_green.svg',
      scaledSize: { width: 30, height: 30 }
    },
    theater: {
      url: 'assets/map-pins/mp_pink.svg',
      scaledSize: { width: 30, height: 30 }
    },
    'historical monuments and memorials': {
      url: 'assets/map-pins/mp_purple.svg',
      scaledSize: { width: 30, height: 30 }
    }
  };
  public get mapIcons() {
    return this._mapIcons;
  }
  public set mapIcons(value) {
    this._mapIcons = value;
  }

  ngOnInit() {
    this.dp.points.pipe(filter(p => p !== undefined || p !== null))
        .subscribe(p => {
          this.points = p;
        });

    this.pds.programs.pipe(filter(p => p !== undefined || p !== null))
        .subscribe(p => {
          this.points = p;
        });
  }

  getIcon(p): string {
    return this.mapIcons[p.type.toLowerCase()];
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
