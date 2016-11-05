'use strict';

System.register(['aurelia-framework', 'aurelia-http-client'], function (_export, _context) {
    "use strict";

    var inject, HttpClient, _dec, _class, Offenders;

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
            _export('Offenders', Offenders = (_dec = inject(HttpClient), _dec(_class = function () {
                function Offenders(http) {
                    _classCallCheck(this, Offenders);

                    this.http = http.configure(function (x) {
                        x.withHeader('X-CSRF-TOKEN', getCookie("XSRF-TOKEN"));
                    });

                    function getCookie(name) {
                        var re = new RegExp(name + "=([^;]+)");
                        var value = re.exec(document.cookie);
                        return value != null ? unescape(value[1]) : null;
                    }
                }

                Offenders.prototype.configureRouter = function configureRouter(config, router) {
                    config.map([{ route: ["", "offender/view/"], moduleId: 'view-offenders', nav: true, title: 'Offender View' }, { route: ["create"], moduleId: 'create-offender', nav: true, title: 'Offender Create' }, { route: ["edit"], name: 'edit-offender', moduleId: 'edit-offender', nav: false, title: 'Offender Edit' }]);

                    this.router = router;
                };

                return Offenders;
            }()) || _class));

            _export('Offenders', Offenders);
        }
    };
});
//# sourceMappingURL=offenders.js.map
