import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation2',
  templateUrl: './navigation2.component.html',
  styleUrls: ['./navigation2.component.scss']
})
export class Navigation2Component implements OnInit {

  public show = false;
  public buttonName: any = 'Show';

  constructor() { }

  ngOnInit() {
  }

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
