import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import $ from 'jquery';
import dataTable from 'datatables';

@inject(HttpClient)
export class Home {
  constructor(http) {
    this.http = http;
  }

  activate() {
    return this.http.get('/api/home').then(response => {
      this.html = response.content.html;
    });
  }

  attached() {
    $('#casesTable').dataTable( {
        scrollY:        '50vh',
        scrollCollapse: true,
        paging:         false
    });
  }
}