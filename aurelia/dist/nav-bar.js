"use strict";

System.register(["aurelia-router"], function (_export, _context) {
    "use strict";

    var Router, NavBar;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaRouter) {
            Router = _aureliaRouter.Router;
        }],
        execute: function () {
            _export("NavBar", NavBar = function () {
                NavBar.inject = function inject() {
                    return [Router];
                };

                function NavBar(router) {
                    var _this = this;

                    _classCallCheck(this, NavBar);

                    this.router = router;

                    var routerMap = [];

                    if (typeof userObj !== "undefined") {
                        if (userObj.role == "admin" || userObj.role == "caseadmin") {
                            var routerMap = [{ route: ['cases/'], name: 'cases', moduleId: 'cases', nav: false, title: 'Cases' }, { route: ['victim/'], name: 'victims', moduleId: 'victims', nav: false, title: 'Victims' }, { route: ['offender/'], name: 'offenders', moduleId: 'offenders', nav: false, title: 'Offenders' }, { route: ['users/'], moduleId: 'users', nav: false, title: 'Users' }, { route: ['admin/'], moduleId: 'admin', nav: false, title: 'Admin' }];
                        } else if (userObj.role !== "facilitator") {
                            var routerMap = [{ route: ['cases/'], moduleId: 'cases', nav: false, title: 'Cases' }, { route: ['victim/'], moduleId: 'victims', nav: false, title: 'Victims' }, { route: ['offender/'], moduleId: 'offenders', nav: false, title: 'Offenders' }, { route: ['users/'], moduleId: 'users', nav: false, title: 'Users' }];
                        } else if (userObj.role == "facilitator") {
                            var routerMap = [{ route: ['cases/'], moduleId: 'cases', nav: false, title: 'Cases' }];
                        }
                    }

                    this.router.configure(function (config) {
                        config.title = _this.user;
                        config.parent = "true";
                        config.map(routerMap);
                    });
                }

                NavBar.prototype.openNav = function openNav() {
                    var $nav = $('#navbar-app');
                    var $overlay = $('.mobile-menu-overlay');

                    if ($nav.hasClass('show-menu')) {
                        $nav.removeClass('show-menu');
                        $overlay.addClass('hide');
                    } else {
                        $nav.addClass('show-menu');
                        $overlay.removeClass('hide');
                    }
                };

                return NavBar;
            }());

            _export("NavBar", NavBar);
        }
    };
});
//# sourceMappingURL=nav-bar.js.map
