import { Component, OnInit } from '@angular/core';
import {DataPointsService} from '../data-points.service';



@Component({
  selector: 'app-program-filter',
  templateUrl: './program-filter.component.html',
  styleUrls: ['./program-filter.component.scss']
})
export class ProgramFilterComponent implements OnInit {
  interestTypes: [any];
  filters: string[] = []

  constructor(private dp: DataPointsService) {}

  ngOnInit() {
    this.dp.getDistinctProgramTypes().subscribe(d => this.interestTypes = d);
  }

}
