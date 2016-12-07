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

    removeVictim(i) {
        this.victimFieldData.splice(i, 1);
    }

    addOffender() {
        this.newOffenderFieldMapping = [];
        this.newOffenderFieldMapping = $.extend(true, {}, this.offenderFieldMapping);
    
        this.offenderFieldData.push(
            this.newOffenderFieldMapping
        );
    
        this.offenderCount++;
    }

    removeOffender(i) {
        this.offenderFieldData.splice(i, 1);
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
                this.router.navigateToRoute('edit-case', {'id': response.content.id });
            });
    }

    setupCaseValidation() {
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

        $("#casesForm").validate({
            onkeyup: false,
            rules: {
                caseId: {
                    required: true,
                    remote: {
                        url: "/api/cases/exists"
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