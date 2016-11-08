'use strict';

System.register(['aurelia-router', 'aurelia-http-client'], function (_export, _context) {
    "use strict";

    var Router, HttpClient, App;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaRouter) {
            Router = _aureliaRouter.Router;
        }, function (_aureliaHttpClient) {
            HttpClient = _aureliaHttpClient.HttpClient;
        }],
        execute: function () {
            _export('App', App = function () {
                App.inject = function inject() {
                    return [Router, HttpClient];
                };

                function App(router, http) {
                    var _this = this;

                    _classCallCheck(this, App);

                    this.router = router;
                    this.http = http;

                    var routerMap = [];
                    this.user = userObj;

                    if (typeof userObj !== "undefined") {
                        if (userObj.role == "admin" || userObj.role == "caseadmin") {
                            var routerMap = [{ route: ['', 'home/'], moduleId: 'home', nav: true, title: 'Home' }, { route: ['cases/'], moduleId: 'cases', nav: true, title: 'Cases' }, { route: ['victim/'], moduleId: 'victims', nav: true, title: 'Victims' }, { route: ['offender/'], moduleId: 'offenders', nav: true, title: 'Offenders' }, { route: ['users/'], moduleId: 'users', nav: true, title: 'Users' }, { route: ['admin/'], moduleId: 'admin', nav: true, title: 'Admin' }];
                        } else if (userObj.role !== "facilitator") {
                            var routerMap = [{ route: ['', 'home/'], moduleId: 'home', nav: true, title: 'Home' }, { route: ['cases/'], moduleId: 'cases', nav: true, title: 'Cases' }, { route: ['victim/'], moduleId: 'victims', nav: true, title: 'Victims' }, { route: ['offender/'], moduleId: 'offenders', nav: true, title: 'Offenders' }, { route: ['users/'], moduleId: 'users', nav: true, title: 'Users' }];
                        } else if (userObj.role == "facilitator") {
                            var routerMap = [{ route: ['', 'home/'], moduleId: 'home', nav: true, title: 'Home' }, { route: ['cases/'], moduleId: 'cases', nav: true, title: 'Cases' }];
                        }
                    }

                    this.router.configure(function (config) {
                        config.title = _this.user;
                        config.parent = "true";
                        config.map(routerMap);
                    });
                }

                App.prototype.activate = function activate() {
                    this.user = userObj;
                    console.log('tes');
                };

                App.prototype.attached = function attached() {};

                return App;
            }());

            _export('App', App);
        }
    };
});
//# sourceMappingURL=app.js.map
