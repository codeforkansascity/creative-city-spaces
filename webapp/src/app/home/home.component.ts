import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public isOn = false;
  public componentToDisplay = 1;

  getButtonText(): string {
    return `Switch ${ this.isOn ? 'Off' : 'On' }`;
  }
  setState(): void {
    this.isOn = !this.isOn;
  }

  setComponent(componentNumber: number): void {
    this.componentToDisplay = componentNumber;
  }

  constructor() {}

  ngOnInit() {}
}
