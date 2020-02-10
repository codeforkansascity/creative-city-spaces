import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-pages',
  templateUrl: './error-pages.component.html',
  styleUrls: ['./error-pages.component.scss']
})
export class ErrorPagesComponent implements OnInit {
  public errorMessage = '500 SERVER ERROR, CONTACT ADMINISTRATOR!!!!';

  constructor() { }

  ngOnInit() {
  }

}
