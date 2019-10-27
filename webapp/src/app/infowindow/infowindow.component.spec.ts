import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MaterialImportsModule} from '../material-imports.module';

import {InfowindowComponent} from './infowindow.component';

describe('InfowindowComponent', () => {
  let component: InfowindowComponent;
  let fixture: ComponentFixture<InfowindowComponent>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [InfowindowComponent],
          imports: [
            MaterialImportsModule,
          ]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfowindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
