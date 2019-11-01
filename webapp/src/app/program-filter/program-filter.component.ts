import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DataPointsService} from '../data-points.service';

@Component({
  selector: 'app-program-filter',
  templateUrl: './program-filter.component.html',
  styleUrls: ['./program-filter.component.scss']
})
export class ProgramFilterComponent implements OnInit {
  types = [
    {type: 'Annual'}, {type: 'One-Time Event'}, {type: 'Series Of Events'}
  ];

  data: any[];

  constructor(private dps: DataPointsService) {}

  ngOnInit() {}

  setType(t: string) {
    this.dps.getPrograms(`'${t}'`);
  }

}
