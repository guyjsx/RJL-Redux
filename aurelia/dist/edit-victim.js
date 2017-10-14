'use strict';

System.register(['aurelia-framework', 'aurelia-http-client', 'aurelia-router', 'jquery-validation', 'moment'], function (_export, _context) {
    "use strict";

    var inject, HttpClient, Router, validate, moment, _dec, _class, EditVictim;

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
        }, function (_moment) {
            moment = _moment.default;
        }],
        execute: function () {
            _export('EditVictim', EditVictim = (_dec = inject(HttpClient, Router), _dec(_class = function () {
                function EditVictim(http, router) {
                    _classCallCheck(this, EditVictim);

                    this.http = http;
                    this.router = router;
                }

                EditVictim.prototype.activate = function activate(params) {
                    var _this = this;

                    this.data = [];
                    this.cases = [];
                    this.selectedCase = [];

                    this.childIndex = 0;

                    this.selectedFiles = [];

                    return this.http.get('/api/victim/' + params.id + '/edit').then(function (response) {
                        _this.data = response.content.data;
                        _this.cases = response.content.casesData;
                        for (var i = 0; i < _this.data.rj_cases.length; i++) {
                            _this.selectedCase.push(_this.data.rj_cases[i].id);
                        }

                        _this.victimFieldData = [response.content.victimFieldData];
                    });
                };

                EditVictim.prototype.update = function update(id) {
                    this.http.put('/api/victim/' + id, this.data).then(function (response) {
                        window.location.reload(true);
                    });
                };

                EditVictim.prototype.edit = function edit() {
                    $("input[readonly], textarea[readonly]").removeAttr('readonly');
                    $("select[disabled]").removeAttr('disabled');
                    $('.editOverlay').remove();
                    $('.inputField, .select2-container').removeClass('showEditIcon').unbind('mouseenter mouseleave');
                    $('.edit-button').removeClass('show-button');
                    $('.update-button').addClass('show-button');
                };

                EditVictim.prototype.setupVictimValidation = function setupVictimValidation() {
                    var _rules;

                    var self = this;
                    $.validator.addMethod("dateFormat", function (value, element) {
                        return value.match(/^\d{2}\/\d{2}\/\d{4}$/);
                    }, "Please enter a date in the format MM/DD/YYYY");

                    $.validator.addMethod("states", function (value, element) {
                        return value.match(/^(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))$/);
                    }, "Please enter a state in two letters, e.g., KY");

                    $("#editVictimForm").validate({
                        onkeyup: false,
                        rules: (_rules = {
                            caseId: {
                                required: true
                            },
                            victimId: {
                                required: true
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
                        messages: {},
                        submitHandler: function submitHandler(form) {
                            self.update(self.data['id']);
                        }
                    });
                };

                EditVictim.prototype.parseDates = function parseDates() {
                    var dateArr = $('body [data-date="true"]');

                    for (var i = 0; i < dateArr.length; i++) {
                        console.log('hello');

                        var date = $(dateArr[i]);
                        var dateVal = date.val();
                        if (dateVal !== "") {
                            var parsedDate = moment(dateVal).format('L');
                            date.val(parsedDate);
                        }
                    }
                };

                EditVictim.prototype.attached = function attached() {
                    $(".case-select2-container .caseSelect").val(this.selectedCase).trigger('change');

                    $('#edit').on('select2:open', function () {
                        console.log('open');
                    });

                    this.parseDates();
                    this.setupVictimValidation();
                };

                EditVictim.prototype.showDeleteModal = function showDeleteModal() {
                    $('#deleteModal').modal('show');
                };

                EditVictim.prototype.delete = function _delete(id) {
                    var _this2 = this;

                    this.loaderOverlay = 1;
                    var self = this;
                    this.http.delete('/api/victim/' + id).then(function (response) {
                        self.loaderOverlay = 0;
                        $('#deleteModal').modal('hide');

                        _this2.router.navigateToRoute('victims');
                    });
                };

                return EditVictim;
            }()) || _class));

            _export('EditVictim', EditVictim);
        }
    };
});
//# sourceMappingURL=edit-victim.js.map
