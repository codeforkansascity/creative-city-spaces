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
  primary_functions = [
    {primary_function:'Educational'},{primary_function:'Social'},{primary_function:'Cultural'},{primary_function:'Historic'}
  ]
  event_council_districts = [
    {event_council_district:'1'},{event_council_district:'2'},{event_council_district:'3'},{event_council_district:'4'},{event_council_district:'5'}
  ];

  data: any[];

  constructor(private dps: DataPointsService) {}

  ngOnInit() {}

  setType(t: string) {
    this.dps.getPrograms(`'${t}'`);
  }

}
