import {HttpClient} from 'aurelia-http-client';
import $ from 'jquery';
import dataTable from 'datatables';

export class Cases {
	//test
	static inject() { return [HttpClient]; }
	constructor(http) {
		this.http = http;
	}

	activate() {
		return this.http.get('/api/cases').then(response => {
			this.html = response.content.html;
		});
	}

	attached() {
      $('#casesTable').dataTable( {
		  "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
      });
  }
}