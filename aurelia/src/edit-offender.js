import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {Router} from 'aurelia-router';
import validate from 'jquery-validation';
import moment from 'moment';

@inject(HttpClient, Router)
export class EditOffender {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }

    activate(params) {
        this.data = [];
        this.cases = [];
        this.selectedCase = [];

        this.childIndex = 0;

        this.selectedFiles = [];

        return this.http.get('/api/offender/' + params.id + '/edit')
            .then(response => {
                this.data = response.content.data;
                this.cases = response.content.casesData;
                for (var i=0; i < this.data.rj_cases.length; i++) {
                    this.selectedCase.push(
                        this.data.rj_cases[i].id
                    );
                }

                this.offenderFieldData = [
                    response.content.offenderFieldData
                ];
            });
    }

    update(id) {
        this.http.put('/api/offender/' + id, this.data)
            .then(response => {
                window.location.reload(true);
            });
    }

    edit() {
        $("input[readonly], textarea[readonly]").removeAttr('readonly');
        $("select[disabled]").removeAttr('disabled');
        $('.editOverlay').remove();
        $('.inputField, .select2-container').removeClass('showEditIcon').unbind('mouseenter mouseleave');
        $('.edit-button').removeClass('show-button');
        $('.update-button').addClass('show-button');
    }

    setupOffenderValidation() {
        var self = this;
        $.validator.addMethod(
            "dateFormat",
            function(value, element) {
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

        $("#editOffenderForm").validate({
            onkeyup: false,
            rules: {
                caseId: {
                    required: true
                },
                offenderId: {
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

    attached() {
        $(".case-select2-container .caseSelect").val(this.selectedCase).trigger('change');

        $('#edit').on('select2:open', function() {
            console.log('open');
        });

        this.parseDates();
        this.setupOffenderValidation();
    }
}