import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {Router} from 'aurelia-router';

@inject(HttpClient, Router)
export class CreateCase {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }

    activate(params) {
        this.data = [];


        return this.http.get('/api/cases/' + params.id + '/edit')
            .then(response => {
                this.data = response.content.data;
            });
    }

    update(id) {
        //$.ajax({
        //    type: "PUT",
        //    url: "/api/cases/" + id,
        //    data: $('#editCaseForm').serialize(),
        //    dataType: 'json',
        //    success: function(data) {
        //        this.router.navigate("");
        //    }
        //});

        this.http.put('/api/cases/' + id, this.data)
            .then(response => {
                this.router.navigate("");
            });

        //this.http.fetch('/api/cases/' + id, {
        //    method: "put",
        //    body: this.caseData
        //}).then(response => {
        //    this.router.navigate("");
        //})
    }

    attached() {
        $("input[readonly]").on("click", function() {
            $("input[readonly]").removeAttr('readonly');
            $(".inputField").addClass('removeEditIcon');
        });
    }
}