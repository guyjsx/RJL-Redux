import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import validate from 'jquery-validation';
import bootstrap from '../jspm_packages/github/twbs/bootstrap@3.3.6/js/bootstrap.min.js';

@inject(HttpClient)
export class CreateCase {
    constructor(http) {
        this.http = http;
    }

    activate() {
        this.caseFieldData = [];

        this.offenderFieldData = [];

        this.selectedCase = [];
        this.data = [];

        return this.http.get('/api/offender/create').then(response => {
            this.cases = response.content.cases;

            this.offenderFieldData = [ response.content.offenderFieldData ];
        });
    }


    submitOffender() {
        this.data = {
            offender: this.offenderFieldData,
            cases: this.selectedCase
        }

        this.http.post('/api/offender', this.data)
            .then(response => {
                console.log('done');
            });
    }

    setupOffenderValidation() {
        var self = this;
        $.validator.addMethod(
            "dateFormat",
            function(value, element) {
                return value.match(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/);
            },
            "Please enter a date in the format YYYY-MM-DD"
        );

        $.validator.addMethod(
            "states",
            function(value, element) {
                return value.match(/^(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))$/);
            },
            "Please enter a state in two letters, e.g., KY"
        );

        $("#offendersForm").validate({
            onkeyup: false,
            rules: {
                caseId: {
                    required: true,
                    remote: {
                        url: "/api/cases/exists"
                    }
                },
                offenderId: {
                    required: true,
                    remote: {
                        url: "/api/offender/exists"
                    }
                },
                offenderId: {
                    required: true,
                    remote: {
                        url: "/api/offender/exists"
                    }
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
                caseId: {
                    remote: "This Case ID already exists"
                },
                offenderId: {
                    remote: "This Offender ID already exists"
                },
                offenderId: {
                    remote: "This Offender ID already exists"
                }
            },
            submitHandler: function(form) {
                //form.submit();
                self.submitOffender();
            }
        });
    }

    attached() {
        this.setupOffenderValidation();
    }
}