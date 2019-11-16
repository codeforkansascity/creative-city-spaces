import {Component, OnInit} from '@angular/core';
import {DataPointsService} from '../services/data-points.service';
import {filter} from 'rxjs/operators';
import {ProgramDataService} from '../services/program-data.service';

@Component({
  selector: 'app-place-filter',
  templateUrl: './place-filter.component.html',
  styleUrls: ['./place-filter.component.scss']
})
export class PlaceFilterComponent implements OnInit {
  interestTypes: [any];
  filters: string[] = [];

  // tslint:disable-next-line: max-line-length
  // tslint:disable-next-line: variable-name
  private _menuButton = {
    attractions: {
      url: 'assets/menu-buttons/mb-attractions.png',
      scaledSize: { width: 50, height: 50 }
    },
    fountains: {
      url: './././assets/menu-buttons/mb-fountains.png',
      scaledSize: { width: 50, height: 50 }
    },
    museums: {
      url: './././assets/menu-buttons/mb-museums.png',
      scaledSize: { width: 50, height: 50 }
    },
    'public art': {
      url: './././assets/menu-buttons/mb-public-art.png',
      scaledSize: { width: 50, height: 50 }
    },
    theater: {
      url: './././assets/menu-buttons/mb-theater.png',
      scaledSize: { width: 50, height: 50 }
    },
    'historical monuments and memorials': {
      url: './././assets/menu-buttons/mb-historical.png',
      scaledSize: { width: 50, height: 50 }
    },
  };
  public get menuButton() {
    return this._menuButton;
  }
  public set menuButton(value) {
    this._menuButton = value;
  }

  constructor(private dp: DataPointsService) {}

  ngOnInit() {
    this.dp.getDistinctTypes().subscribe(d => this.interestTypes = d);
  }

  toggleFilter(type: string, checked: boolean) {
    // add or remove the selected type
    if (!checked) {
      const idx = this.filters.indexOf(type);
      if (idx > -1) {
        this.filters.splice(idx, 1);
      }
    } else {
      this.filters.push(type);
    }
    // update the data set
    this.dp.applyFilters(this.filters);
  }


}
