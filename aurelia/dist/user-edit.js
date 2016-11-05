'use strict';

System.register(['aurelia-framework', 'aurelia-http-client', 'aurelia-router', 'jquery-validation'], function (_export, _context) {
    "use strict";

    var inject, HttpClient, Router, validate, _dec, _class, EditUser;

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
        }],
        execute: function () {
            _export('EditUser', EditUser = (_dec = inject(HttpClient, Router), _dec(_class = function () {
                function EditUser(http, router) {
                    _classCallCheck(this, EditUser);

                    this.http = http;
                    this.router = router;
                }

                EditUser.prototype.activate = function activate(params) {
                    var _this = this;

                    return this.http.get('/api/user/' + params.id + '/edit').then(function (response) {
                        _this.data = response.content.data;

                        _this.userFieldData = [response.content.userFieldData];
                    });
                };

                EditUser.prototype.update = function update(id) {
                    this.http.put('/api/user/' + id, this.data).then(function (response) {
                        window.location.reload(true);
                    });
                };

                EditUser.prototype.edit = function edit() {
                    $("input[readonly], textarea[readonly]").removeAttr('readonly');
                    $("select[disabled]").removeAttr('disabled');
                    $('.editOverlay').remove();
                    $('.inputField').removeClass('showEditIcon').unbind('mouseenter mouseleave');
                    $('.edit-button').removeClass('show-button');
                    $('.update-button').addClass('show-button');
                };

                EditUser.prototype.attached = function attached() {
                    $(".inputField, .textArea").hover(function () {
                        $(".inputField").addClass('showEditIcon');
                    }, function () {
                        $(".inputField").removeClass('showEditIcon');
                    });
                };

                return EditUser;
            }()) || _class));

            _export('EditUser', EditUser);
        }
    };
});
//# sourceMappingURL=user-edit.js.map
