import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class CreateCase {
    constructor(http) {
        this.http = http;
    }

    activate() {
        this.caseFields = [];
        this.caseFieldData = [];

        this.victimFields =  [
            { name: 'victimId', type:'input', namePretty: 'Victim ID'},
            { name: 'firstName', type:'input', namePretty: 'First Name'},
            { name: 'lastName', type:'input', namePretty: 'Last Name'}
        ];

        this.offenderFields = [
                { name: 'offenderId', type:'input', namePretty: 'Offender ID'},
                { name: 'firstName', type:'input', namePretty: 'First Name'},
                { name: 'lastName', type:'input', namePretty: 'Last Name'},
        ];

        this.victimFieldData = [];
        this.offenderFieldData = [];

        this.states = [
            { id: 0, name: 'foo' },
            { id: 1, name: 'bar'},
            { id: 2, name: 'baz'}];


        this.selectedState = [];

        return this.http.get('/api/cases/create').then(response => {
            this.html = response.content.html;
        });
    }

    addVictim() {
        this.victimFieldData.push(this.victimFields);
    }

    addOffender() {
        this.offenderFieldData.push(this.offenderFields);
    }

    submitCase() {
        this.token = $('input[name="_token"]').val();
        $.ajax({
            type: "POST",
            url: "/api/cases",
            data: $('#casesForm').serialize(),
            dataType: 'json',
            success: function(data) {
                console.log(data);
            }
        });
    }

    changeCallback(evt: Event): void {
        console.log(evt);
    }

    attached() {
        //$('#casesForm').on('submit', function() {
        //    event.preventDefault();
        //    console.log('testing submit');
        //
        //    $("#victim-0, #offender-0").remove();
        //
        //    $.ajax({
        //        type: "POST",
        //        beforeSend: function (request)
        //        {
        //            request.setRequestHeader("X-XSRF-TOKEN", this.token);
        //        },
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

export class StringifyValueConverter {
    toView(value) {
        return JSON.stringify(value, null, 2);
    }
}