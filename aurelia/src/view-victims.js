import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import $ from 'jquery';
import dataTable from 'datatables';

@inject (HttpClient)
export class ViewVictims {
    constructor(http) {
        this.http = http
    }

    activate() {
        return this.http.get('/api/victim').then(response => {
            this.html = response.content.html;
        });
    }

    attached() {
        $('#victimsTable').dataTable();
    }
}