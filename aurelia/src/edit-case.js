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
        this.noteData = {};
        this.notes = [];
        this.uploadedFiles = [];
        this.charges = [];
        this.selectedCharge = [];

        this.fileSuccess = 0;
        this.noteSuccess = 0;
        this.childIndex = 0;
        this.caseFieldData = [];

        this.offenderFieldData = [];

        //this.noteFieldData = [
        //    {
        //        noteContent: {
        //            name: 'noteContent', type:'textarea', namePretty: 'Note Content', value: ""
        //        },
        //        noteDate: {
        //            name: 'noteDate', type:'input', namePretty: 'Note Date', value: ""
        //        }
        //    }
        //];

        this.selectedFiles = [];

        return this.http.get('/api/cases/' + params.id + '/edit')
            .then(response => {
                this.data = response.content.data;
                this.uploadedFiles = this.data.files;
                this.notes = this.data.notes;
                this.charges = response.content.chargesData;
                for (var i=0; i < this.data.charges.length; i++) {
                    //this.selectedCharge.push({
                    //    id: this.data.charges[i].id,
                    //    text: this.data.charges[i].charges
                    //});
                    this.selectedCharge.push(
                        this.data.charges[i].id
                    );
                }

                this.caseFieldData = [
                    response.content.caseFieldData
                ]

                this.victimFieldData = [
                    response.content.victimFieldData
                ];

                this.offenderFieldData = [
                    response.content.offenderFieldData
                ]
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
        $("input[readonly], textarea[readonly]").removeAttr('readonly');
        $('.editOverlay').remove();
        $("select[disabled]").removeAttr('disabled');
        $(".inputField, .textAreaField").addClass('removeEditIcon');
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

    addNote() {
        this.http.post('/api/note' + '?id=' + this.data.id, this.noteData)
            .then(response => {
                console.log(response);
                this.noteSuccess = 1;
                this.notes.push(response.content.note);
            });
    }

    attached() {
        $(".charge-select2-container .chargeSelect").val(this.selectedCharge).trigger('change');
    }
}