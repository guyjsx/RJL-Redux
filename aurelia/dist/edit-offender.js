'use strict';

System.register(['aurelia-framework', 'aurelia-http-client', 'aurelia-router', 'jquery-validation', 'moment'], function (_export, _context) {
    "use strict";

    var inject, HttpClient, Router, validate, moment, _dec, _class, EditOffender;

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
            _export('EditOffender', EditOffender = (_dec = inject(HttpClient, Router), _dec(_class = function () {
                function EditOffender(http, router) {
                    _classCallCheck(this, EditOffender);

                    this.http = http;
                    this.router = router;
                }

                EditOffender.prototype.activate = function activate(params) {
                    var _this = this;

                    this.data = [];
                    this.cases = [];
                    this.selectedCase = [];

                    this.childIndex = 0;

                    this.selectedFiles = [];

                    return this.http.get('/api/offender/' + params.id + '/edit').then(function (response) {
                        _this.data = response.content.data;
                        _this.cases = response.content.casesData;
                        for (var i = 0; i < _this.data.rj_cases.length; i++) {
                            _this.selectedCase.push(_this.data.rj_cases[i].id);
                        }

                        _this.offenderFieldData = [response.content.offenderFieldData];
                    });
                };

                EditOffender.prototype.update = function update(id) {
                    this.http.put('/api/offender/' + id, this.data).then(function (response) {
                        window.location.reload(true);
                    });
                };

                EditOffender.prototype.edit = function edit() {
                    $("input[readonly], textarea[readonly]").removeAttr('readonly');
                    $("select[disabled]").removeAttr('disabled');
                    $('.editOverlay').remove();
                    $('.inputField, .select2-container').removeClass('showEditIcon').unbind('mouseenter mouseleave');
                    $('.edit-button').removeClass('show-button');
                    $('.update-button').addClass('show-button');
                };

                EditOffender.prototype.setupOffenderValidation = function setupOffenderValidation() {
                    var _rules;

                    var self = this;
                    $.validator.addMethod("dateFormat", function (value, element) {
                        return value.match(/^\d{2}\/\d{2}\/\d{4}$/);
                    }, "Please enter a date in the format MM/DD/YYYY");

                    $.validator.addMethod("states", function (value, element) {
                        return value.match(/^(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))$/);
                    }, "Please enter a state in two letters, e.g., KY");

                    $("#editOffenderForm").validate({
                        onkeyup: false,
                        rules: (_rules = {
                            caseId: {
                                required: true
                            },
                            offenderId: {
                                required: true
                            }
                        }, _rules['offenderId'] = {
                            required: true
                        }, _rules.caseStatus = {
                            required: true
                        }, _rules.courtDate = {
                            required: true,
                            dateFormat: true
                        }, _rules.charge = {
                            required: true
                        }, _rules.dateOfCharge = {
                            required: true,
                            dateFormat: true
                        }, _rules.dateClosed = {
                            dateFormat: true
                        }, _rules.dateOfReferral = {
                            required: true,
                            dateFormat: true
                        }, _rules.email = {
                            email: true
                        }, _rules.firstName = {
                            required: true
                        }, _rules.lastName = {
                            required: true
                        }, _rules.dateOfBirth = {
                            required: true,
                            dateFormat: true
                        }, _rules.streetAddress = {
                            required: true
                        }, _rules.city = {
                            required: true
                        }, _rules.state = {
                            states: true
                        }, _rules.zipCode = {
                            required: true
                        }, _rules.phoneOne = {
                            required: true
                        }, _rules.phoneOneType = {
                            required: true
                        }, _rules.phoneTwo = {}, _rules['zipCode'] = {
                            required: true
                        }, _rules),
                        messages: {},
                        submitHandler: function submitHandler(form) {
                            self.update(self.data['id']);
                        }
                    });
                };

                EditOffender.prototype.parseDates = function parseDates() {
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

                EditOffender.prototype.attached = function attached() {
                    $(".case-select2-container .caseSelect").val(this.selectedCase).trigger('change');

                    $('#edit').on('select2:open', function () {
                        console.log('open');
                    });

                    this.parseDates();
                    this.setupOffenderValidation();
                };

                EditOffender.prototype.showDeleteModal = function showDeleteModal() {
                    $('#deleteModal').modal('show');
                };

                EditOffender.prototype.delete = function _delete(id) {
                    var _this2 = this;

                    this.loaderOverlay = 1;
                    var self = this;
                    this.http.delete('/api/offender/' + id).then(function (response) {
                        self.loaderOverlay = 0;
                        $('#deleteModal').modal('hide');

                        _this2.router.navigateToRoute('offenders');
                    });
                };

                return EditOffender;
            }()) || _class));

            _export('EditOffender', EditOffender);
        }
    };
});
//# sourceMappingURL=edit-offender.js.map
