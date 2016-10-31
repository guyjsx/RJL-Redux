import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {Router} from 'aurelia-router';
import validate from 'jquery-validation';
import moment from 'moment';
import dataTable from 'datatables';

@inject(HttpClient, Router)
export class EditCase {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }

    activate(params) {
        this.user = userObj;
        this.data = [];
        this.noteData = {};
        this.notes = [];
        this.uploadedFiles = [];
        this.charges = [];
        this.facilitators = [];
        this.selectedCharge = [];
        this.selectedFacilitator = [];
        this.selectedCaseClose = [];
        this.selectedCaseManager = [];

        this.fileSuccess = 0;
        this.noteSuccess = 0;
        this.childIndex = 0;
        this.caseFieldData = [];

        this.offenderFieldData = [];

        this.selectedFiles = [];

        return this.http.get('/api/cases/' + params.id + '/edit')
            .then(response => {
                this.data = response.content.data;
                this.uploadedFiles = this.data.files;
                this.notes = this.data.notes;

                this.data['caseClose'] = response.content.data.caseClose.toString();
                this.data['user_id'] = response.content.data.user_id.toString();

                if (this.notes) {
                    for (var i=0; i < this.notes.length; i++) {
                        this.notes[i].noteDate = moment(this.notes[i].noteDate).format('L');
                    }
                }

                this.charges = response.content.chargesData;
                this.facilitators = response.content.facilitatorData;
                
                for (var i=0; i < this.data.charges.length; i++) {

                    this.selectedCharge.push(
                        this.data.charges[i].id
                    );
                }

                for (var i=0; i < this.data.users.length; i++) {
                    this.selectedFacilitator.push(
                        this.data.users[i].id
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
        this.http.put('/api/cases/' + id, this.data)
            .then(response => {
                window.location.reload(true);
            });
    }

    edit() {
        if (userObj.role !== "facilitator") {
            $("input[readonly], textarea[readonly]").removeAttr('readonly');
            $("select[disabled]").removeAttr('disabled');
            $('.editOverlay').remove();
            $('.inputField, .select2-container').removeClass('showEditIcon').unbind('mouseenter mouseleave');
            $('.edit-button').removeClass('show-button');
            $('.update-button').addClass('show-button');
        }
    }

    fileUpload() {
        this.fileData = new FormData();
        this.fileData.append('file', this.selectedFiles[0]);
        var self = this;

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

    addNote(id) {
        this.http.post('/api/note' + '?id=' + id, this.noteData)
            .then(response => {
                console.log(response);
                this.showNoteSuccess();
                response.content.note.noteDate = moment(response.content.note.noteDate).format('L');

                this.notes.push(response.content.note);
            });
    }

    showNoteSuccess() {
        var self = this;
        self.noteSuccess = 1;

        setTimeout(function(){
            self.noteSuccess = 0;
            $('#noteForm')[0].reset();
        }, 2000);
    }

    setupCaseValidation() {
        var self = this;
        $.validator.addMethod(
            "dateFormat",
            function(value, element) {
                if (value == "" || value == null) {

                    return true;
                }

                return value.match(/^\d{2}\/\d{2}\/\d{4}$/);
            },
            "Please enter a date in the format MM/DD/YYYY"
        );

        $.validator.addMethod(
            "states",
            function(value, element) {
                return value.match(/^(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))$/);
            },
            "Please enter a state in two letters, e.g., KY"
        );

        $("#noteForm").validate({
            rules: {
                noteDate: {
                    required: true,
                    dateFormat: true
                }
            },
            messages: {
            },
            submitHandler: function(form) {
                self.addNote(self.data['id']);
            }
        });

        $("#editCaseForm").validate({
            onkeyup: false,
            rules: {
                caseId: {
                    required: true
                },
                victimId: {
                    required: true
                },
                offenderId: {
                    required: true
                },
                caseStatus: {
                    required: true
                },
                courtDate: {
                    required: true,
                    dateFormat: true
                },
                charge: {
                    required: true
                },
                dateOfCharge: {
                    required: true,
                    dateFormat: true
                },
                dateClosed: {
                    dateFormat: true
                },
                dateOfReferral: {
                    required: true,
                    dateFormat: true
                },
                email: {
                    email: true
                },
                firstName: {
                    required: true
                },
                lastName: {
                    required: true
                },
                dateOfBirth: {
                    required: true,
                    dateFormat: true
                },
                streetAddress: {
                    required: true
                },
                city: {
                    required: true
                },
                state: {
                    states: true
                },
                zipCode: {
                    required: true
                },
                phoneOne: {
                    required: true
                },
                phoneOneType: {
                    required: true
                },
                phoneTwo: {
                },
                zipCode: {
                    required: true
                }

            },
            messages: {
            },
            submitHandler: function(form) {
                self.update(self.data['id']);
            }
        });
    }

    parseDates() {
        var dateArr = $('body [data-date="true"]');

        for (var i = 0; i < dateArr.length; i++) {
            console.log('hello');

            var date = $(dateArr[i]);
            var dateVal = date.val();
            if (dateVal !== "") {
                var parsedDate = moment(dateVal).format('L');
                date.val(parsedDate);
            }
        }
    }

    setupEditableTable() {
        var self = this;

        $('.editableInput').on('click', function(e) {
            $(this).addClass('hide');
            var $input = $(this).next();
            $input.removeClass('hide');
            $($input).focus();

            var index = this.dataset.index;
            var name = this.dataset.name;
            var id = self.notes[index].id;

            $($input).keydown(function (e) {
                if (e.which == 27) {
                    $( this ).addClass( "hide" );

                    var $text = $(this).prev();
                    $text.removeClass('hide');
                }
                else if(e.which == 13) {
                    $.ajax({
                        url: "/api/note/" + id,
                        context: this,
                        method: "PUT",
                        data: {
                            'name': name,
                            'value': this.value
                        },
                        dataType: "json",
                        beforeSend: function (request)
                        {
                            request.setRequestHeader("X-CSRF-TOKEN", getCookie("XSRF-TOKEN"));
                        }
                    }).done(function(response) {
                        $( this ).addClass( "hide" );
                        var $text = $(this).prev();
                        var isDate = $text.data().date == true;

                        if (isDate) {
                            response.note[name] = moment(response.note[name]).format('L');
                        }

                        $text.removeClass('hide');

                        var noteData = self.notes[index];
                        noteData[name] = response.note[name];
                    });

                    function getCookie(name)
                    {
                        var re = new RegExp(name + "=([^;]+)");
                        var value = re.exec(document.cookie);
                        return (value != null) ? unescape(value[1]) : null;
                    }

                    return false;
                }
            });
        });
    }

    deleteFile(id, index) {
        var self = this;

        $.ajax({
            url: "/api/file-upload/" + id,
            context: this,
            method: "DELETE",
            dataType: "json",
            beforeSend: function (request)
            {
                request.setRequestHeader("X-CSRF-TOKEN", getCookie("XSRF-TOKEN"));
            }
        }).done(function(response) {
            self.uploadedFiles.splice(index, 1);
        });

        function getCookie(name)
        {
            var re = new RegExp(name + "=([^;]+)");
            var value = re.exec(document.cookie);
            return (value != null) ? unescape(value[1]) : null;
        }
    }

    attached() {
        $(".charge-select2-container .chargeSelect").val(this.selectedCharge).trigger('change');
        $(".facilitator-select2-container .facilitatorSelect").val(this.selectedFacilitator).trigger('change');

        $('#edit').on('select2:open', function() {
            console.log('open');
        });

        this.parseDates();
        this.setupCaseValidation();
        this.setupEditableTable();
    }
}