import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {Router} from 'aurelia-router';
import validate from 'jquery-validation';

@inject(HttpClient, Router)
export class EditUser {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }

    activate(params) {
        return this.http.get('/api/user/' + params.id + '/edit')
            .then(response => {
                this.data = response.content.data;

                this.userFieldData = [
                    response.content.userFieldData
                ];
            });
    }

    update(id) {
        this.http.put('/api/user/' + id, this.data)
            .then(response => {
                // this.router.reset();
            });
    }

    edit() {
        $("input[readonly], textarea[readonly]").removeAttr('readonly');
        $("select[disabled]").removeAttr('disabled');
        $('.editOverlay').remove();
        $('.inputField').removeClass('showEditIcon').unbind('mouseenter mouseleave');
    }


    attached() {
        $(".inputField, .textArea").hover(function() {
            $(".inputField").addClass('showEditIcon');
        },function() {
            $(".inputField").removeClass('showEditIcon');
        });
    }
}