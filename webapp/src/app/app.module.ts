import {AgmCoreModule} from '@agm/core';
import {HttpClientModule} from '@angular/common/http';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatExpansionModule,
  MatFormField,
  MatFormFieldModule,
  MatIconModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCheckboxModule,
  MatCardModule,
  MatGridListModule,
  MatDatepickerModule,
  MatNativeDateModule,
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PlaceFilterComponent} from './place-filter/place-filter.component';
import {PointDetailsComponent} from './point-details/point-details.component';
import {ProgramFilterComponent} from './program-filter/program-filter.component';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import { HomeComponent } from './home/home.component';
import { InfowindowComponent } from './infowindow/infowindow.component';
import { NavigationContainerComponent } from './navigation-container/navigation-container.component';
import { FilterContainerComponent } from './filter-container/filter-container.component';
import { MapContainerComponent } from './map-container/map-container.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  declarations: [
    AppComponent, HomeComponent, InfowindowComponent, PlaceFilterComponent, NavigationContainerComponent,
    FilterContainerComponent, MapContainerComponent, ProgramFilterComponent, FirstComponent, SecondComponent, PointDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCPQpQYFtvmIoRfkNSlYm_Wri-O30Y1fkY'}),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatExpansionModule,
    HttpClientModule,
    MatCheckboxModule,
    AppRoutingModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
    MatGridListModule,
    FirstComponent,
    SecondComponent,
    PointDetailsComponent,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
