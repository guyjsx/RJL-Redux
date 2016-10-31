import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {Router} from 'aurelia-router';

@inject(HttpClient, Router)
export class UserRegister {
    constructor(http, router) {
        this.http = http;
        this.router = router;

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
            } else {
                this.router.navigateToRoute('user-edit', {'id': response.content.user.id });
            }
        });
    }
}