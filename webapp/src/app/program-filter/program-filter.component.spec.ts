import {HttpClientTestingModule} from '@angular/common/http/testing';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MaterialImportsModule} from '../material-imports.module';

import {ProgramFilterComponent} from './program-filter.component';

describe('ProgramFilterComponent', () => {
  let component: ProgramFilterComponent;
  let fixture: ComponentFixture<ProgramFilterComponent>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [ProgramFilterComponent],
          imports: [
            MaterialImportsModule,
            HttpClientTestingModule,
          ],
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
