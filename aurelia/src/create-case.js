import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

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

    attached() {

    }
}