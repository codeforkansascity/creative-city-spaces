import {animate, state, style, transition, trigger} from '@angular/animations';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-point-details',
  templateUrl: './point-details.component.html',
  styleUrls: ['./point-details.component.scss']
})
export class PointDetailsComponent implements OnInit {
  @Input() data: any = {name: ''};
  @Output() clear = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  clearDetails() {
    this.clear.emit();
  }
}
