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

        this.victimFieldData = [];
        this.victimSearchResults = [];
        this.offenderSearchResults = [];

        this.offenderFieldData = [];
        this.selectedCharge = [];
        this.selectedFacilitator = [];
        this.victimCount = 0;
        this.data = [];

        return this.http.get('/api/cases/create').then(response => {
            this.charges = response.content.charges;
            this.facilitators = response.content.facilitators;
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
        this.newOffenderFieldMapping = [];
        this.newOffenderFieldMapping = $.extend(true, {}, this.offenderFieldMapping);
    
        this.offenderFieldData.push(
            this.newOffenderFieldMapping
        );
    
        this.offenderCount++;
    }

    submitCase() {
        this.data = {
            case: this.caseFieldData,
            victim: this.victimFieldData,
            offender: this.offenderFieldData,
            charge: this.selectedCharge,
            facilitator: this.selectedFacilitator
        }

        this.http.post('/api/cases', this.data)
            .then(response => {
                console.log('done');
            });
    }

    setupCaseValidation() {
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
                    remote: {
                        url: "/api/victim/exists"
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
                victimId: {
                    remote: "This Victim ID already exists"
                },
                offenderId: {
                    remote: "This Offender ID already exists"
                }
            },
            submitHandler: function(form) {
                //form.submit();
                self.submitCase();
            }
        });
    }

    attached() {
        this.setupCaseValidation();

        $('#victimModal').on('show.bs.modal', function(e) {
            var victimIndex = $(e.relatedTarget).data('index');
            $(e.currentTarget).find('input[name="modalVictimIndex"]').val(victimIndex);
        });

        $('#victimModal').on('hide.bs.modal', $.proxy(function(e) {
            this.victimSearchResults = [];
        }, this));

        $('#offenderModal').on('show.bs.modal', function(e) {
            var offenderIndex = $(e.relatedTarget).data('index');
            $(e.currentTarget).find('input[name="modalOffenderIndex"]').val(offenderIndex);
        });

        $('#offenderModal').on('hide.bs.modal', $.proxy(function(e) {
            this.offenderSearchResults = [];
        }, this));
    }

    victimSearch(searchType, searchStr, searchElement) {

        return this.http.get('/api/victim/search?searchType=' + searchType + '&searchStr=' + searchStr  ).then(response => {
            this.victimSearchResults = response.content.victims;
            $('#victimModal').modal('show', $('#' + searchElement));
        });
    }

    offenderSearch(searchType, searchStr, searchElement) {
        return this.http.get('/api/offender/search?searchType=' + searchType + '&searchStr=' + searchStr  ).then(response => {
            this.offenderSearchResults = response.content.offenders;
            $('#offenderModal').modal('show', $('#' + searchElement));
        });
    }

    populateVictim(victim) {
        console.log('log');
        var prop = "";
        var victimIndex =  parseInt($('input[name="modalVictimIndex"]').val());

        for (prop in this.victimFieldData[victimIndex]) {
            this.victimFieldData[victimIndex][prop].value = victim[prop];
        }

        $('#victimModal').modal('hide');
    }

    populateOffender(offender) {
        console.log('log');
        var prop = "";
        var offenderIndex =  parseInt($('input[name="modalOffenderIndex"]').val());

        for (prop in this.offenderFieldData[offenderIndex]) {
            this.offenderFieldData[offenderIndex][prop].value = offender[prop];
        }

        $('#offenderModal').modal('hide');
    }
}