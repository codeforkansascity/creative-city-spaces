import {HttpClientTestingModule} from '@angular/common/http/testing';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialImportsModule} from '../material-imports.module';
import {PlaceFilterComponent} from '../place-filter/place-filter.component';
import {ProgramFilterComponent} from '../program-filter/program-filter.component';

import {FilterContainerComponent} from './filter-container.component';

describe('FilterContainerComponent', () => {
  let component: FilterContainerComponent;
  let fixture: ComponentFixture<FilterContainerComponent>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [
            FilterContainerComponent,
            PlaceFilterComponent,
            ProgramFilterComponent,
          ],
          imports: [
            MaterialImportsModule,
            NoopAnimationsModule,
            HttpClientTestingModule,
          ]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
