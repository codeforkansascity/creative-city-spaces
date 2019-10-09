import {Component, OnInit} from '@angular/core';
import {DataPointsService} from '../data-points.service';

@Component({
  selector: 'app-place-filter',
  templateUrl: './place-filter.component.html',
  styleUrls: ['./place-filter.component.scss']
})
export class PlaceFilterComponent implements OnInit {
  interestTypes: [any];
  filters: string[] = []

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
