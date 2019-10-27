import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

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
