import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProgramsTestComponent } from './show-programs-test.component';

describe('ShowProgramsTestComponent', () => {
  let component: ShowProgramsTestComponent;
  let fixture: ComponentFixture<ShowProgramsTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowProgramsTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProgramsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
