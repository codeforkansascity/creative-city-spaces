import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

import {DataPointsService} from '../services/data-points.service';
import {ProgramDataService} from '../services/program-data.service';

@Component({
  selector: 'app-program-filter',
  templateUrl: './program-filter.component.html',
  styleUrls: ['./program-filter.component.scss']
})
export class ProgramFilterComponent implements OnInit {
  form: FormGroup;
  private typesData: any[];
  private primaryFunctions: any[];
  private councilDistricts: any[] = [1, 2, 3, 4, 5, 6];

  constructor(
      private fb: FormBuilder, private dps: DataPointsService,
      private pds: ProgramDataService) {}

  ngOnInit() {
    this.form = this.fb.group({
      beginDate: [''],
      endDate: [''],
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

    this.councilDistricts
        .map(d => {
          return this.fb.control(false);
        })
        .forEach(c => (this.form.controls.districts as FormArray).push(c));
  }

  get formTypes() {
    return <FormArray>this.form.get('types');
  }

  get formPriFunc() {
    return <FormArray>this.form.get('priFunc');
  }

  get formDistricts() {
    return <FormArray>this.form.get('districts');
  }

  clear() {
    this.form.reset();
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

    let cd = this.form.value.districts.map((v, i) => v ? i + 1 : undefined)
                 .filter(v => !!v);

    this.pds.applyFilter(
        tp, cd, pf,
        this.form.value.beginDate.valid ?
            this.form.value.beginDate.format('YYYY-MM-DD') :
            undefined,
        this.form.value.endDate.valid ?
            this.form.value.endDate.format('YYYY-MM-DD') :
            undefined);
  }

  canApply(): boolean {
    return this.form.valid && this.form.dirty;
  }
}
