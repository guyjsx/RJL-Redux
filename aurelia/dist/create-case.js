'use strict';

System.register(['aurelia-framework', 'aurelia-http-client', 'aurelia-router', 'jquery-validation', 'bootstrap'], function (_export, _context) {
    "use strict";

    var inject, HttpClient, Router, validate, bootstrap, _dec, _class, CreateCase;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaHttpClient) {
            HttpClient = _aureliaHttpClient.HttpClient;
        }, function (_aureliaRouter) {
            Router = _aureliaRouter.Router;
        }, function (_jqueryValidation) {
            validate = _jqueryValidation.default;
        }, function (_bootstrap) {
            bootstrap = _bootstrap.default;
        }],
        execute: function () {
            _export('CreateCase', CreateCase = (_dec = inject(HttpClient, Router), _dec(_class = function () {
                function CreateCase(http, router) {
                    _classCallCheck(this, CreateCase);

                    this.http = http;
                    this.router = router;
                }

                CreateCase.prototype.activate = function activate() {
                    var _this = this;

                    this.caseFieldData = [];

                    this.victimFieldData = [];
                    this.victimSearchResults = [];
                    this.offenderSearchResults = [];

                    this.offenderFieldData = [];
                    this.selectedCharge = [];
                    this.selectedFacilitator = [];
                    this.victimCount = 0;
                    this.data = [];

                    return this.http.get('/api/cases/create').then(function (response) {
                        _this.charges = response.content.charges;
                        _this.facilitators = response.content.facilitators;
                        _this.caseFieldData = [response.content.caseFieldData];

                        _this.victimFieldMapping = response.content.victimFieldData;

                        _this.offenderFieldMapping = response.content.offenderFieldData;
                    });
                };

                CreateCase.prototype.resetFormValidator = function resetFormValidator() {
                    $('#case').removeData('validator');
                    $(formId).removeData('unobtrusiveValidation');
                    $.validator.unobtrusive.parse(formId);
                };

                CreateCase.prototype.addVictim = function addVictim() {
                    this.newVictimFieldMapping = [];
                    this.newVictimFieldMapping = $.extend(true, {}, this.victimFieldMapping);

                    this.victimFieldData.push(this.newVictimFieldMapping);

                    this.victimCount++;

                    this.resetFormValidator();
                };

                CreateCase.prototype.removeVictim = function removeVictim(i) {
                    this.victimFieldData.splice(i, 1);
                };

                CreateCase.prototype.addOffender = function addOffender() {
                    this.newOffenderFieldMapping = [];
                    this.newOffenderFieldMapping = $.extend(true, {}, this.offenderFieldMapping);

                    this.offenderFieldData.push(this.newOffenderFieldMapping);

                    this.offenderCount++;
                    this.resetFormValidator();
                };

                CreateCase.prototype.removeOffender = function removeOffender(i) {
                    this.offenderFieldData.splice(i, 1);
                };

                CreateCase.prototype.submitCase = function submitCase() {
                    var _this2 = this;

                    this.data = {
                        case: this.caseFieldData,
                        victim: this.victimFieldData,
                        offender: this.offenderFieldData,
                        charge: this.selectedCharge,
                        facilitator: this.selectedFacilitator
                    };

                    this.http.post('/api/cases', this.data).then(function (response) {
                        console.log('done');
                        _this2.router.navigateToRoute('edit-case', { 'id': response.content.id });
                    });
                };

                CreateCase.prototype.setupCaseValidation = function setupCaseValidation() {
                    var _rules;

                    var self = this;
                    $.validator.addMethod("dateFormat", function (value, element) {
                        return value.match(/^\d{2}\/\d{2}\/\d{4}$/);
                    }, "Please enter a date in the format MM/DD/YYYY");

                    $.validator.addMethod("states", function (value, element) {
                        return value.match(/^(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))$/);
                    }, "Please enter a state in two letters, e.g., KY");

                    $("#casesForm").validate({
                        onkeyup: false,
                        rules: (_rules = {
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
                            phoneTwo: {}
                        }, _rules['zipCode'] = {
                            required: true
                        }, _rules),
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
                        submitHandler: function submitHandler(form) {
                            self.submitCase();
                        }
                    });
                };

                CreateCase.prototype.attached = function attached() {
                    this.setupCaseValidation();

                    $('#victimModal').on('show.bs.modal', function (e) {
                        var victimIndex = $(e.relatedTarget).data('index');
                        $(e.currentTarget).find('input[name="modalVictimIndex"]').val(victimIndex);
                    });

                    $('#victimModal').on('hide.bs.modal', $.proxy(function (e) {
                        this.victimSearchResults = [];
                    }, this));

                    $('#offenderModal').on('show.bs.modal', function (e) {
                        var offenderIndex = $(e.relatedTarget).data('index');
                        $(e.currentTarget).find('input[name="modalOffenderIndex"]').val(offenderIndex);
                    });

                    $('#offenderModal').on('hide.bs.modal', $.proxy(function (e) {
                        this.offenderSearchResults = [];
                    }, this));
                };

                CreateCase.prototype.victimSearch = function victimSearch(searchType, searchStr, searchElement) {
                    var _this3 = this;

                    return this.http.get('/api/victim/search?searchType=' + searchType + '&searchStr=' + searchStr).then(function (response) {
                        _this3.victimSearchResults = response.content.victims;
                        $('#victimModal').modal('show', $('#' + searchElement));
                    });
                };

                CreateCase.prototype.offenderSearch = function offenderSearch(searchType, searchStr, searchElement) {
                    var _this4 = this;

                    return this.http.get('/api/offender/search?searchType=' + searchType + '&searchStr=' + searchStr).then(function (response) {
                        _this4.offenderSearchResults = response.content.offenders;
                        $('#offenderModal').modal('show', $('#' + searchElement));
                    });
                };

                CreateCase.prototype.populateVictim = function populateVictim(victim) {
                    console.log('log');
                    var prop = "";
                    var victimIndex = parseInt($('input[name="modalVictimIndex"]').val());

                    for (prop in this.victimFieldData[victimIndex]) {
                        this.victimFieldData[victimIndex][prop].value = victim[prop];
                    }

                    $('#victimModal').modal('hide');
                };

                CreateCase.prototype.populateOffender = function populateOffender(offender) {
                    console.log('log');
                    var prop = "";
                    var offenderIndex = parseInt($('input[name="modalOffenderIndex"]').val());

                    for (prop in this.offenderFieldData[offenderIndex]) {
                        this.offenderFieldData[offenderIndex][prop].value = offender[prop];
                    }

                    $('#offenderModal').modal('hide');
                };

                return CreateCase;
            }()) || _class));

            _export('CreateCase', CreateCase);
        }
    };
});
//# sourceMappingURL=create-case.js.map
