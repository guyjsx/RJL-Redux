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
        this.uploadedFiles = [];
        this.fileSuccess = 0;
        this.caseFieldData = [
            {
                caseId: {
                    name: "caseId", type: "input", namePretty: "Case ID", value: ''
                },
                caseStatus: {
                    name: "caseStatus", type: "input", namePretty: "Case Status", value: ''
                },
                dateOfReferral: {
                    name: "dateOfReferral", type: "input", namePretty: "Date of Referral", value: ''
                },
                caseDate: {
                    name: "courtDate", type: "input", namePretty: "Court Date", value: ''
                },
                dateOfCharge: {
                    name: "dateOfCharge", type: "input", namePretty: "Date of Charge", value: ''
                },
                caseClose: {
                    name: "caseClose", type: "input", namePretty: "Case Closed", value: ''
                },
                facilitator: {
                    name: "facilitator", type: "input", namePretty: "Facilitator", value: ''
                },
                caseDescription: {
                    name: "caseDescription", type: "input", namePretty: "Case Description", value: ''
                }
            }
        ];

        this.offenderFieldData = [
            {
                offenderId: {
                    name: 'offenderId', type:'input', namePretty: 'Offender ID', value: ""
                },
                firstName: {
                    name: 'firstName', type:'input', namePretty: 'First Name', value: ""
                },
                lastName: {
                    name: 'lastName', type:'input', namePretty: 'Last Name', value: ""
                }
            }
        ];

        this.selectedFiles = [];

        return this.http.get('/api/cases/' + params.id + '/edit')
            .then(response => {
                this.data = response.content.data;
                this.uploadedFiles = this.data.files;
                this.victimFieldData = [
                    response.content.victimFieldData
                ];
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

    edit() {
        $("input[readonly]").removeAttr('readonly');
        $('.editOverlay').remove();
        $("select[disabled]").removeAttr('disabled');
        $(".inputField").addClass('removeEditIcon');
    }

    fileUpload() {
        this.fileData = new FormData();
        this.fileData.append('file', this.selectedFiles[0]);
        var self = this;

        //this.http
        //    .configure(x => {
        //        x.withHeader('Accept', "application/json, text/javascript, */*; q=0.01");
        //        x.withHeader('X-Requested-With', "XMLHttpRequest");
        //        x.withHeader('Content-Type', "multipart/form-data; boundary=----WebKitFormBoundaryzFN9t06ME5jQVmtj");
        //        x.withHeader('Content-Length', 48334);
        //    });
        //this.http.post('/api/file-upload', this.fileData);

        $.ajax({
            url: '/api/file-upload' + '?id=' + this.data.id ,
            type: 'POST',
            beforeSend: function (request)
            {
                request.setRequestHeader("X-CSRF-TOKEN", getCookie("XSRF-TOKEN"));
            },
            data: this.fileData,
            cache: false,
            dataType: 'json',
            processData: false,
            contentType: false,
            complete: function(result) {
                self.fileSuccess = 1;
                self.uploadedFiles.push(result.responseJSON.file);
                $("form[name='fileUploadForm']").trigger('reset');
            }
        });

        function getCookie(name)
        {
            var re = new RegExp(name + "=([^;]+)");
            var value = re.exec(document.cookie);
            return (value != null) ? unescape(value[1]) : null;
        }
    }

    attached() {

    }
}