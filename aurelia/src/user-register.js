import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class UserRegister {
    constructor(http) {
        this.http = http;
    }

    activate() {
        this.userData = {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            role: ''
        };

        this.errors = [];

        this.roles = [
            {value: 'facilitator', name: 'Facilitator'},
            {value: 'casemanager', name: 'Case Manager'},
            {value: 'caseadmin', name: 'Case Admin'},
            {value: 'admin', name: 'Admin'}
        ];
    }

    attached() {

    }

    registerUser() {
        this.http.post('/register', this.userData).then(response => {
            if(response.content.success == "false") {
                this.errors = response.content.data;
            }
        });
    }
}