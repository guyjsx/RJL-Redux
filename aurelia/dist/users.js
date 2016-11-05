'use strict';

System.register(['aurelia-framework', 'aurelia-http-client'], function (_export, _context) {
    "use strict";

    var inject, HttpClient, _dec, _class, Users;

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
        }],
        execute: function () {
            _export('Users', Users = (_dec = inject(HttpClient), _dec(_class = function () {
                function Users(http) {
                    _classCallCheck(this, Users);

                    this.http = http.configure(function (x) {
                        x.withHeader('X-CSRF-TOKEN', getCookie("XSRF-TOKEN"));
                    });

                    function getCookie(name) {
                        var re = new RegExp(name + "=([^;]+)");
                        var value = re.exec(document.cookie);
                        return value != null ? unescape(value[1]) : null;
                    }
                }

                Users.prototype.configureRouter = function configureRouter(config, router) {
                    config.map([{ route: [""], name: "user-index", moduleId: 'user-index', nav: true, title: 'View All Users' }, { route: ["/register"], name: "user-register", moduleId: 'user-register', nav: true, title: 'User Register' }, { route: ["/edit/"], name: "user-edit", moduleId: 'user-edit', nav: false }]);

                    this.router = router;
                };

                return Users;
            }()) || _class));

            _export('Users', Users);
        }
    };
});
//# sourceMappingURL=users.js.map
