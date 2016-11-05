import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import $ from 'jquery';
import dataTable from 'datatables';

@inject (HttpClient)
export class ViewCase {
    constructor(http) {
        this.http = http;
    }

    activate() {
        return this.http.get('/api/user/assignments').then(response => {
            this.assignments = response.content
        });
    }

    attached() {
        $('#facilitatorAssignTable').dataTable();
    }
}