import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class CreateCase {
    constructor(http) {
        this.http = http;
    }

    activate() {
        this.caseFieldData = [
            {
                caseId: {
                    name: "caseId", type: "input", namePretty: "Case ID", value: ''
                },
                caseStatus: {
                    name: "caseStatus", type: "input", namePretty: "Case Status", value: ''
                }
            }
        ];

        this.victimFieldData = [];
        this.offenderFieldData = [];
        this.selectedCharge = [];
        this.victimCount = 0;

        return this.http.get('/api/cases/create').then(response => {
            this.charges = response.content.charges
        });
    }

    addVictim() {
        this.victimFieldData.push(
            {
                victimId: {
                    name: 'victimId', type:'input', namePretty: 'Victim ID', value: ""
                },
                firstName: {
                    name: 'firstName', type:'input', namePretty: 'First Name', value: ""
                },
                lastName: {
                    name: 'lastName', type:'input', namePretty: 'Last Name', value: ""
                }
            }
        );

        this.victimCount++;
    }

    addOffender() {
        this.offenderFieldData.push(
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

    attached() {
        //$('#casesForm').on('submit', function() {
        //    event.preventDefault();
        //    console.log('testing submit');
        //
        //    $.ajax({
        //        type: "POST",
        //        url: "/api/cases",
        //        data: $(this).serialize(),
        //        dataType: 'json',
        //        success: function(data) {
        //            console.log(data);
        //        }
        //    });
        //});
    }
}