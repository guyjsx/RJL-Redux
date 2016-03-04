import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import validate from 'jquery-validation';

@inject(HttpClient)
export class CreateCase {
    constructor(http) {
        this.http = http;
    }

    activate() {
        this.caseFieldData = [];

        this.victimFieldData = [];
        this.offenderFieldData = [];
        this.selectedCharge = [];
        this.victimCount = 0;
        this.data = [];

        return this.http.get('/api/cases/create').then(response => {
            this.charges = response.content.charges
            this.caseFieldData = [
                response.content.caseFieldData
            ];

            this.victimFieldMapping = response.content.victimFieldData;


            this.offenderFieldMapping = response.content.offenderFieldData;

        });
    }

    addVictim() {
        this.newVictimFieldMapping = [];
        this.newVictimFieldMapping = $.extend(true, {}, this.victimFieldMapping);

        this.victimFieldData.push(
           this.newVictimFieldMapping
        );

        this.victimCount++;
    }

    addOffender() {
        this.offenderFieldData.push(
            this.offenderFieldMapping
        );
    }

    submitCase() {
        this.data = {
            case: this.caseFieldData,
            victim: this.victimFieldData,
            offender: this.offenderFieldData,
            charge: this.selectedCharge
        }

        this.http.post('/api/cases', this.data)
            .then(response => {
                console.log('done');
            });
    }

    setupCaseValidation() {
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

        $("#casesForm").validate({
            onkeyup: false,
            rules: {
                caseId: {
                    required: true,
                    remote: {
                        url: "/api/cases/exists"
                    }
                },
                victimId: {
                    required: true,
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
                caseId: {
                    remote: "what the"
                }
            },
            submitHandler: function(form) {
                form.submit();
            }
        });
    }

    setupVictimValidation(index) {
        $( "#casesForm" ).rules( "add", {
            minlength: 2
        });
    }

    attached() {
        this.setupCaseValidation();
    }
}