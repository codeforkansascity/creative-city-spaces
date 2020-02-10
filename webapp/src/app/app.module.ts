import {AgmCoreModule} from '@agm/core';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';

import {AboutComponent} from './about/about.component';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FilterContainerComponent} from './filter-container/filter-container.component';
import {HomeComponent} from './home/home.component';
import {InfowindowComponent} from './infowindow/infowindow.component';
import {MapContainerComponent} from './map-container/map-container.component';
import {MaterialImportsModule} from './material-imports.module';
import {NavigationComponent} from './navigation/navigation.component';
import {Navigation2Component} from './navigation2/navigation2.component';
import {PlaceFilterComponent} from './place-filter/place-filter.component';
import {PointDetailsComponent} from './point-details/point-details.component';
import {ProgramFilterComponent} from './program-filter/program-filter.component';
import { ErrorPagesComponent } from './error-pages/error-pages.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfowindowComponent,
    PlaceFilterComponent,
    FilterContainerComponent,
    MapContainerComponent,
    ProgramFilterComponent,
    PointDetailsComponent,
    NavigationComponent,
    Navigation2Component,
    AboutComponent,
    ErrorPagesComponent,
  ],
  imports: [
    [RouterModule.forRoot(routes)],
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCQ1UU0RvnATRoJEngj9gj0v73FLfOmgfo'}),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialImportsModule,
    MaterialImportsModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
