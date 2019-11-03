import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
// tslint:disable-next-line: max-line-length
import {MatButtonModule, MatButtonToggleModule, MatCheckbox, MatCheckboxModule, MatDatepickerModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatSelectModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {MatMomentDateModule} from '@angular/material-moment-adapter';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,       MatFormFieldModule,  MatToolbarModule,
    MatButtonModule,    MatSelectModule,     MatIconModule,
    MatSidenavModule,   MatFormFieldModule,  MatButtonToggleModule,
    MatIconModule,      MatDatepickerModule, MatInputModule,
    MatExpansionModule, MatMomentDateModule, MatCheckboxModule,
    MatCheckboxModule,  MatIconModule,       MatToolbarModule,
    MatSidenavModule,   MatListModule,
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
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
  ],
})
export class MaterialImportsModule {
}
