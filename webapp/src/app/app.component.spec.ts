import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {AppComponent} from './app.component';
import {MaterialImportsModule} from './material-imports.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          imports: [
            RouterTestingModule,
            MaterialImportsModule,
          ],
          declarations: [AppComponent],
        })
        .compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
