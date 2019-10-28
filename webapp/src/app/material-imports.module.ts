import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
// tslint:disable-next-line: max-line-length
import {MatButtonModule, MatButtonToggleModule, MatDatepickerModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {MatMomentDateModule} from '@angular/material-moment-adapter';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatIconModule,
    MatDatepickerModule,
    MatInputModule,
    MatExpansionModule,
    MatMomentDateModule,
  ],
  exports: [
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatIconModule,
    MatDatepickerModule,
    MatInputModule,
    MatExpansionModule,
    MatMomentDateModule,
  ],
})
export class MaterialImportsModule {
}