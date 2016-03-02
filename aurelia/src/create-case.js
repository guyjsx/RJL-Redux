import {inject} from 'aurelia-framework';
import {ObserverLocator} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import validate from 'jquery-validation';

@inject(HttpClient, ObserverLocator)
export class CreateCase {
    constructor(http, observerLocator) {
        this.http = http;
        this.observerLocator = observerLocator;
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

    onChange(newValue, oldValue) {
        alert(`bar changed from ${oldValue} to ${newValue}`);
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
        $("#casesForm").validate({
            rules: {
                caseId: {
                    required: true
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
                    required: true
                },
                dateOfCharge: {
                    required: true
                },
                dateOfReferral: {
                    required: true
                },
                firstName: {
                    required: true
                },
                lastName: {
                    required: true
                },
                dateOfBirth: {
                    required: true
                },
                streetAddress: {
                    required: true
                },
                city: {
                    required: true
                },
                zipCode: {
                    required: true
                },
                primaryPhone: {
                    required: true
                },
                primaryPhoneType: {
                    required: true
                },
                zipCode: {
                    required: true
                }

            },
            messages: {

            },
            submitHandler: function(form) {
                form.submit();
            }
        });
    }

    setupVictimValidation(index) {
        $( "#casesForm" ).rules( "add", {
            "minlength": 2
        });
    }

    attached() {
        this.setupCaseValidation();
    }
}