import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import $ from 'jquery';
import dataTable from 'datatables';

@inject (HttpClient)
export class ViewOffenders {
    constructor(http) {
        this.http = http;
    }

    activate() {
        return this.http.get('/api/offender').then(response => {
            this.html = response.content.html;
        });
    }

    attached() {
        $('#offendersTable').dataTable({
            "scrollX": true
        });
    }
}