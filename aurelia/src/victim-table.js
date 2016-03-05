import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import $ from 'jquery';
import dataTable from 'datatables';

@inject (HttpClient)
export class VictimTable {
    constructor(http) {
        this.http = http;
    }

    activate() {
        this.victims = [
            {
                victimId: "v1ID", firstName: "v1f", lastName: "v1l"
            },
            {
                victimId: "v2ID", firstName: "v2f", lastName: "v2l"
            }
        ];
    }

    attached() {
        $('#victimTable').dataTable({
        });
    }

    victimSearch(searchStr) {
        //return this.http.get('/api/victim/search?q=' + searchStr ).then(response => {
        //    this.victims = response.content.victims;
        //    $('#victimModal').modal('show');
        //});

        $('#victimModal').modal('show');
    }
}