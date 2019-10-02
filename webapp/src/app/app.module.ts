import {AgmCoreModule, InfoWindowManager} from '@agm/core';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatButtonToggleModule, MatFormField, MatFormFieldModule, MatIconModule, MatSelectModule, MatToolbarModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {InfowindowComponent} from './infowindow/infowindow.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  declarations: [AppComponent, HomeComponent, InfowindowComponent],
  imports: [
    [RouterModule.forRoot(routes)],
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCPQpQYFtvmIoRfkNSlYm_Wri-O30Y1fkY'}),
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
