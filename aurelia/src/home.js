import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Home {
  constructor(http) {
    this.http = http;
  }

  activate() {
  	
  }
}