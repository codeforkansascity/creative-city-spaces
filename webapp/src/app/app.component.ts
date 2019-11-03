import {Component} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ccs';
  constructor(
      private matIconRegistry: MatIconRegistry,
      private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
        `programs`,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
            `././assets/menu-buttons/programs.png`));
  }
}
