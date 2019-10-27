import {AgmCoreModule} from '@agm/core';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
<<<<<<< HEAD
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
=======
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';

>>>>>>> master
import {AppComponent} from './app.component';
import {NavigationContainerComponent} from './navigation-container/navigation-container.component';
import {FilterContainerComponent} from './filter-container/filter-container.component';
import {HomeComponent} from './home/home.component';
import {InfowindowComponent} from './infowindow/infowindow.component';
import {MapContainerComponent} from './map-container/map-container.component';
import {MaterialImportsModule} from './material-imports.module';
import {NavigationComponent} from './navigation/navigation.component';
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
<<<<<<< HEAD
    PointDetailsComponent, FirstComponent, SecondComponent,
=======
    PointDetailsComponent, NavigationComponent
>>>>>>> master
  ],
  imports: [
    [RouterModule.forRoot(routes)],
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCPQpQYFtvmIoRfkNSlYm_Wri-O30Y1fkY'}),
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
<<<<<<< HEAD
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
=======
    HttpClientModule,
    MaterialImportsModule,
>>>>>>> master
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
