import {AgmCoreModule} from '@agm/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MaterialImportsModule} from '../material-imports.module';

import {MapContainerComponent} from './map-container.component';

describe('MapContainerComponent', () => {
  let component: MapContainerComponent;
  let fixture: ComponentFixture<MapContainerComponent>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [MapContainerComponent],
          imports: [
            MaterialImportsModule,
            AgmCoreModule,
          ]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
