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
        return this.http.get('/api/cases').then(response => {
            this.html = response.content.html;
        });
    }

    attached() {
        $('#openCasesTable').dataTable({
            "scrollX": true
        });
        $('#closedCasesTable').dataTable({
            "scrollX": true
        });
    }
}