import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {throwIfEmpty} from 'rxjs/operators';

import {ProgramDataService} from '../services/program-data.service';

@Component({
  selector: 'app-show-programs-test',
  templateUrl: './show-programs-test.component.html',
  styleUrls: ['./show-programs-test.component.scss']
})
export class ShowProgramsTestComponent implements OnInit {
  form: FormGroup;
  private typesData: any[];
  private primaryFunctions: any[];
  private councilDistricts: any[];

  constructor(private fb: FormBuilder, private pds: ProgramDataService) {}

  ngOnInit() {
    this.form = this.fb.group({
      types: this.fb.array([]),
      districts: this.fb.array([]),
      priFunc: this.fb.array([])
    });

    this.pds.getTypes().subscribe(data => {
      this.typesData = data;
      this.typesData
          .map(t => {
            return this.fb.control(false);
          })
          .forEach(c => (this.form.controls.types as FormArray).push(c));
    });

    this.pds.getPrimaryFunctions().subscribe(data => {
      this.primaryFunctions = data;
      this.primaryFunctions.filter(p => !!p.primary_function)
          .map(p => {
            return this.fb.control(false);
          })
          .forEach(c => (this.form.controls.priFunc as FormArray).push(c));
    });

    this.pds.getCouncilDistricts().subscribe(data => {
      this.councilDistricts = data;
      this.councilDistricts
          .map(d => {
            return this.fb.control(false);
          })
          .forEach(c => (this.form.controls.districts as FormArray).push(c));
    });
  }

  apply() {
    this.form.markAsPristine();
    let pf = this.form.value.priFunc
                 .map(
                     (v, i) => v ? this.primaryFunctions[i].primary_function :
                                   undefined)
                 .filter(v => !!v);
    let tp = this.form.value.types
                 .map((v, i) => v ? this.typesData[i].type : undefined)
                 .filter(v => !!v);
    let cd =
        this.form.value.districts
            .map(
                (v, i) => v ? this.councilDistricts[i].event_council_district :
                              undefined)
            .filter(v => !!v);
    console.log(`Query for types => (${tp}) and primary functions => (${
        pf} and council districts => (${cd})`);
  }

  canApply(): boolean {
    return this.form.valid && this.form.dirty;
  }
}
