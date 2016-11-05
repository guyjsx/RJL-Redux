'use strict';

System.register(['aurelia-framework', 'aurelia-http-client'], function (_export, _context) {
    "use strict";

    var inject, HttpClient, _dec, _class, Victims;

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
            _export('Victims', Victims = (_dec = inject(HttpClient), _dec(_class = function () {
                function Victims(http) {
                    _classCallCheck(this, Victims);

                    this.http = http.configure(function (x) {
                        x.withHeader('X-CSRF-TOKEN', getCookie("XSRF-TOKEN"));
                    });

                    function getCookie(name) {
                        var re = new RegExp(name + "=([^;]+)");
                        var value = re.exec(document.cookie);
                        return value != null ? unescape(value[1]) : null;
                    }
                }

                Victims.prototype.configureRouter = function configureRouter(config, router) {
                    config.map([{ route: ["", "victim/view/"], moduleId: 'view-victims', nav: true, title: 'Victim View' }, { route: ["create"], moduleId: 'create-victim', nav: true, title: 'Victim Create' }, { route: ["edit"], name: 'edit-victim', moduleId: 'edit-victim', nav: false, title: 'Victim Edit' }]);

                    this.router = router;
                };

                return Victims;
            }()) || _class));

            _export('Victims', Victims);
        }
    };
});
//# sourceMappingURL=victims.js.map
