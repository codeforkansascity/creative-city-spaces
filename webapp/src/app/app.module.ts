import {AgmCoreModule, InfoWindowManager} from '@agm/core';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';
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
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavigationContainerComponent} from './navigation-container/navigation-container.component';
import {FilterContainerComponent} from './filter-container/filter-container.component';
import {HomeComponent} from './home/home.component';
import {InfowindowComponent} from './infowindow/infowindow.component';
import {MapContainerComponent} from './map-container/map-container.component';
import {PlaceFilterComponent} from './place-filter/place-filter.component';
import {PointDetailsComponent} from './point-details/point-details.component';
import {ProgramFilterComponent} from './program-filter/program-filter.component';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  declarations: [
    AppComponent, HomeComponent, InfowindowComponent, PlaceFilterComponent, NavigationContainerComponent,
    FilterContainerComponent, MapContainerComponent, ProgramFilterComponent,
    PointDetailsComponent, FirstComponent, SecondComponent,
  ],
  imports: [
    [RouterModule.forRoot(routes)],
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCPQpQYFtvmIoRfkNSlYm_Wri-O30Y1fkY'}),
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatIconModule,
    MatExpansionModule,
    HttpClientModule,
    MatCheckboxModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
  exports: [

    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
    MatGridListModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
