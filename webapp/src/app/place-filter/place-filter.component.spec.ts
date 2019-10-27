import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MaterialImportsModule} from '../material-imports.module';

import {PlaceFilterComponent} from './place-filter.component';

describe('PlaceFilterComponent', () => {
  let component: PlaceFilterComponent;
  let fixture: ComponentFixture<PlaceFilterComponent>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [PlaceFilterComponent],
          imports: [
            MaterialImportsModule,
          ]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
