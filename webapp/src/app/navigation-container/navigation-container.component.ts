import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-container',
  templateUrl: './navigation-container.component.html',
  styleUrls: ['./navigation-container.component.css']
})
export class NavigationContainerComponent implements OnInit {

  public show = false;
  public buttonName: any = 'Show';

  constructor() { }

  ngOnInit() {   }

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show) {
      this.buttonName = 'Hide';
    } else {
      this.buttonName = 'Show';
    }

}
}
