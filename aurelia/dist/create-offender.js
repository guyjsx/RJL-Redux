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

                    this.offenderFieldData = [];

                    this.selectedCase = [];
                    this.data = [];

                    return this.http.get('/api/offender/create').then(function (response) {
                        _this.cases = response.content.cases;

                        _this.offenderFieldData = [response.content.offenderFieldData];
                    });
                };

                CreateCase.prototype.submitOffender = function submitOffender() {
                    var _this2 = this;

                    this.data = {
                        offender: this.offenderFieldData,
                        cases: this.selectedCase
                    };

                    this.http.post('/api/offender', this.data).then(function (response) {
                        console.log('done');
                        _this2.router.navigateToRoute('edit-offender', { 'id': response.content.id });
                    });
                };

                CreateCase.prototype.setupOffenderValidation = function setupOffenderValidation() {
                    var _rules, _messages;

                    var self = this;
                    $.validator.addMethod("dateFormat", function (value, element) {
                        return value.match(/^\d{2}\/\d{2}\/\d{4}$/);
                    }, "Please enter a date in the format MM/DD/YYYY");

                    $.validator.addMethod("states", function (value, element) {
                        return value.match(/^(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))$/);
                    }, "Please enter a state in two letters, e.g., KY");

                    $("#offendersForm").validate({
                        onkeyup: false,
                        rules: (_rules = {
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
                            phoneTwo: {}
                        }, _rules['zipCode'] = {
                            required: true
                        }, _rules),
                        messages: (_messages = {
                            caseId: {
                                remote: "This Case ID already exists"
                            },
                            offenderId: {
                                remote: "This Offender ID already exists"
                            }
                        }, _messages['offenderId'] = {
                            remote: "This Offender ID already exists"
                        }, _messages),
                        submitHandler: function submitHandler(form) {
                            self.submitOffender();
                        }
                    });
                };

                CreateCase.prototype.attached = function attached() {
                    this.setupOffenderValidation();
                };

                return CreateCase;
            }()) || _class));

            _export('CreateCase', CreateCase);
        }
    };
});
//# sourceMappingURL=create-offender.js.map
