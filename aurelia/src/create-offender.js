import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {Router} from 'aurelia-router';
import validate from 'jquery-validation';
import bootstrap from 'bootstrap';

@inject(HttpClient, Router)
export class CreateCase {
    constructor(http, router) {
        this.http = http;
        this.router = router;
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
                this.router.navigateToRoute('edit-offender', {'id': response.content.id });
            });
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