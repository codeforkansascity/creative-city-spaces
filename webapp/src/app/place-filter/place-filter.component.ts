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

  constructor(private dp: DataPointsService, ) {}
  interestTypes: [any];
  filters: string[] = [];
  selected: any = undefined;

  private _buttons = {
    attractions: {
      url: 'assets/menu-buttons/attractions.png',

    },
    fountains: {
      url: 'assets/menu-buttons/fountains.png',

    },
    museums: {
      url: 'assets/menu-buttons/museums.png',
  }

    public get buttons() {
      return this._buttons;
    }
    public set buttons(value) {
      this._buttons = value;
    }

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
    this.dp.applyFilters(this.filters);
  }
}
