'use strict';

System.register(['aurelia-framework', 'aurelia-http-client', 'aurelia-router', 'jquery-validation', 'moment', 'datatables'], function (_export, _context) {
    "use strict";

    var inject, HttpClient, Router, validate, moment, dataTable, _typeof, _dec, _class, EditCase;

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
        }, function (_datatables) {
            dataTable = _datatables.default;
        }],
        execute: function () {
            _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
                return typeof obj;
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };

            _export('EditCase', EditCase = (_dec = inject(HttpClient, Router), _dec(_class = function () {
                function EditCase(http, router) {
                    _classCallCheck(this, EditCase);

                    this.http = http;
                    this.router = router;
                }

                EditCase.prototype.activate = function activate(params) {
                    var _this = this;

                    this.isLoading = 0;
                    this.user = userObj;
                    this.data = [];
                    this.noteData = {};
                    this.notes = [];
                    this.uploadedFiles = [];
                    this.charges = [];
                    this.facilitators = [];
                    this.selectedCharge = [];
                    this.selectedFacilitator = [];
                    this.selectedCaseClose = [];
                    this.selectedCaseManager = [];

                    this.fileSuccess = 0;
                    this.noteSuccess = 0;
                    this.childIndex = 0;
                    this.caseFieldData = [];

                    this.offenderFieldData = [];

                    this.selectedFiles = [];

                    return this.http.get('/api/cases/' + params.id + '/edit').then(function (response) {
                        _this.data = response.content.data;
                        _this.uploadedFiles = _this.data.files;
                        _this.notes = _this.data.notes;

                        _this.data['caseClose'] = response.content.data.caseClose.toString();
                        _this.data['user_id'] = response.content.data.user_id.toString();

                        if (_this.notes) {
                            for (var i = 0; i < _this.notes.length; i++) {
                                _this.notes[i].noteDate = moment(_this.notes[i].noteDate).format('L');
                            }
                        }

                        _this.charges = response.content.chargesData;
                        _this.facilitators = response.content.facilitatorData;

                        for (var i = 0; i < _this.data.charges.length; i++) {

                            _this.selectedCharge.push(_this.data.charges[i].id);
                        }

                        for (var i = 0; i < _this.data.users.length; i++) {
                            _this.selectedFacilitator.push(_this.data.users[i].id);
                        }

                        _this.caseFieldData = [response.content.caseFieldData];

                        _this.victimFieldData = [response.content.victimFieldData];

                        _this.offenderFieldData = [response.content.offenderFieldData];
                    });
                };

                EditCase.prototype.update = function update(id) {
                    this.http.put('/api/cases/' + id, this.data).then(function (response) {
                        window.location.reload(true);
                    });
                };

                EditCase.prototype.edit = function edit() {
                    if (userObj.role !== "facilitator") {
                        $("input[readonly], textarea[readonly]").removeAttr('readonly');
                        $("select[disabled]").removeAttr('disabled');
                        $('.editOverlay').remove();
                        $('.inputField, .select2-container').removeClass('showEditIcon').unbind('mouseenter mouseleave');
                        $('.edit-button').removeClass('show-button');
                        $('.update-button').addClass('show-button');
                    }
                };

                EditCase.prototype.fileUpload = function fileUpload() {
                    this.fileData = new FormData();
                    this.fileData.append('file', this.selectedFiles[0]);
                    var self = this;

                    this.isLoading = 0;

                    $.ajax({
                        url: '/api/file-upload' + '?id=' + this.data.id,
                        type: 'POST',
                        beforeSend: function beforeSend(request) {
                            request.setRequestHeader("X-CSRF-TOKEN", getCookie("XSRF-TOKEN"));
                        },
                        data: this.fileData,
                        cache: false,
                        dataType: 'json',
                        processData: false,
                        contentType: false,
                        complete: function complete(result) {
                            self.isLoading = 0;
                            self.fileSuccess = 1;
                            self.uploadedFiles.push(result.responseJSON.file);
                            $("form[name='fileUploadForm']").trigger('reset');
                        }
                    });

                    function getCookie(name) {
                        var re = new RegExp(name + "=([^;]+)");
                        var value = re.exec(document.cookie);
                        return value != null ? unescape(value[1]) : null;
                    }
                };

                EditCase.prototype.addNote = function addNote(id) {
                    var _this2 = this;

                    this.http.post('/api/note' + '?id=' + id, this.noteData).then(function (response) {
                        console.log(response);
                        _this2.showNoteSuccess();
                        response.content.note.noteDate = moment(response.content.note.noteDate).format('L');

                        _this2.notes.push(response.content.note);
                    });
                };

                EditCase.prototype.showNoteSuccess = function showNoteSuccess() {
                    var self = this;
                    self.noteSuccess = 1;

                    setTimeout(function () {
                        self.noteSuccess = 0;
                        $('#noteForm')[0].reset();
                    }, 2000);
                };

                EditCase.prototype.setupCaseValidation = function setupCaseValidation() {
                    var _rules;

                    var self = this;
                    $.validator.addMethod("dateFormat", function (value, element) {
                        if (value == "" || value == null) {

                            return true;
                        }

                        return value.match(/^\d{2}\/\d{2}\/\d{4}$/);
                    }, "Please enter a date in the format MM/DD/YYYY");

                    $.validator.addMethod("states", function (value, element) {
                        return value.match(/^(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))$/);
                    }, "Please enter a state in two letters, e.g., KY");

                    $("#noteForm").validate({
                        rules: {
                            noteDate: {
                                required: true,
                                dateFormat: true
                            }
                        },
                        messages: {},
                        submitHandler: function submitHandler(form) {
                            self.addNote(self.data['id']);
                        }
                    });

                    $("#editCaseForm").validate({
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
                        messages: {},
                        submitHandler: function submitHandler(form) {
                            self.update(self.data['id']);
                        }
                    });
                };

                EditCase.prototype.parseDates = function parseDates() {
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

                EditCase.prototype.setupEditableTable = function setupEditableTable() {
                    var self = this;

                    $('#notesTable').on('click', '.editableInput', function (e) {
                        $(this).addClass('hide');
                        var $input = $(this).next();
                        $input.removeClass('hide');
                        $($input).focus();

                        var index = this.dataset.index;
                        var name = this.dataset.name;
                        var id = self.notes[index].id;

                        $($input).keydown(function (e) {
                            var _this3 = this;

                            if (e.which == 27) {
                                $(this).addClass("hide");

                                var $text = $(this).prev();
                                $text.removeClass('hide');
                            } else if (e.which == 13) {
                                var _ret = function () {
                                    var getCookie = function getCookie(name) {
                                        var re = new RegExp(name + "=([^;]+)");
                                        var value = re.exec(document.cookie);
                                        return value != null ? unescape(value[1]) : null;
                                    };

                                    $.ajax({
                                        url: "/api/note/" + id,
                                        context: _this3,
                                        method: "PUT",
                                        data: {
                                            'name': name,
                                            'value': _this3.value
                                        },
                                        dataType: "json",
                                        beforeSend: function beforeSend(request) {
                                            request.setRequestHeader("X-CSRF-TOKEN", getCookie("XSRF-TOKEN"));
                                        }
                                    }).done(function (response) {
                                        $(this).addClass("hide");
                                        var $text = $(this).prev();
                                        var isDate = $text.data().date == true;

                                        if (isDate) {
                                            response.note[name] = moment(response.note[name]).format('L');
                                        }

                                        $text.removeClass('hide');

                                        var noteData = self.notes[index];
                                        noteData[name] = response.note[name];
                                    });

                                    return {
                                        v: false
                                    };
                                }();

                                if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
                            }
                        });
                    });
                };

                EditCase.prototype.deleteFile = function deleteFile(id, index) {
                    var self = this;

                    $.ajax({
                        url: "/api/file-upload/" + id,
                        context: this,
                        method: "DELETE",
                        dataType: "json",
                        beforeSend: function beforeSend(request) {
                            request.setRequestHeader("X-CSRF-TOKEN", getCookie("XSRF-TOKEN"));
                        }
                    }).done(function (response) {
                        self.uploadedFiles.splice(index, 1);
                    });

                    function getCookie(name) {
                        var re = new RegExp(name + "=([^;]+)");
                        var value = re.exec(document.cookie);
                        return value != null ? unescape(value[1]) : null;
                    }
                };

                EditCase.prototype.attached = function attached() {
                    $(".charge-select2-container .chargeSelect").val(this.selectedCharge).trigger('change');
                    $(".facilitator-select2-container .facilitatorSelect").val(this.selectedFacilitator).trigger('change');

                    $('#edit').on('select2:open', function () {
                        console.log('open');
                    });

                    this.parseDates();
                    this.setupCaseValidation();
                    this.setupEditableTable();
                };

                return EditCase;
            }()) || _class));

            _export('EditCase', EditCase);
        }
    };
});
//# sourceMappingURL=edit-case.js.map
