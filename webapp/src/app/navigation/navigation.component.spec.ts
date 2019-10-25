import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {MaterialImportsModule} from '../material-imports.module';
import {PlaceFilterComponent} from '../place-filter/place-filter.component';

import {NavigationComponent} from './navigation.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [
            NavigationComponent,
            PlaceFilterComponent,
          ],
          imports: [
            MaterialImportsModule,
            RouterTestingModule,
          ]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
