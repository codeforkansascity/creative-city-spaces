import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-infowindow',
  templateUrl: './infowindow.component.html',
  styleUrls: ['./infowindow.component.scss']
})
export class InfowindowComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit() {}
}
