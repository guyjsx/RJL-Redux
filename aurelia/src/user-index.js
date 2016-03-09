import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import $ from 'jquery';
import dataTable from 'datatables';

@inject(HttpClient)
export class UserIndex {
    constructor(http) {
        this.http = http;
    }

    activate() {
        return this.http.get('/api/users')
            .then(response => {
                this.users = response.content.data;
            });
    }

    attached() {
        $('#userTable').dataTable( {
        });
    }
}