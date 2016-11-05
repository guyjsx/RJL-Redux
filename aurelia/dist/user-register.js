'use strict';

System.register(['aurelia-framework', 'aurelia-http-client', 'aurelia-router'], function (_export, _context) {
    "use strict";

    var inject, HttpClient, Router, _dec, _class, UserRegister;

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
        }],
        execute: function () {
            _export('UserRegister', UserRegister = (_dec = inject(HttpClient, Router), _dec(_class = function () {
                function UserRegister(http, router) {
                    _classCallCheck(this, UserRegister);

                    this.http = http;
                    this.router = router;
                }

                UserRegister.prototype.activate = function activate() {
                    this.userData = {
                        name: '',
                        email: '',
                        password: '',
                        password_confirmation: '',
                        role: ''
                    };

                    this.errors = [];

                    this.roles = [{ value: 'facilitator', name: 'Facilitator' }, { value: 'casemanager', name: 'Case Manager' }, { value: 'caseadmin', name: 'Case Admin' }, { value: 'admin', name: 'Admin' }];
                };

                UserRegister.prototype.attached = function attached() {};

                UserRegister.prototype.registerUser = function registerUser() {
                    var _this = this;

                    this.http.post('/register', this.userData).then(function (response) {
                        if (response.content.success == "false") {
                            _this.errors = response.content.data;
                        } else {
                            _this.router.navigateToRoute('user-edit', { 'id': response.content.user.id });
                        }
                    });
                };

                return UserRegister;
            }()) || _class));

            _export('UserRegister', UserRegister);
        }
    };
});
//# sourceMappingURL=user-register.js.map
