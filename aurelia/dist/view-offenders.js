'use strict';

System.register(['aurelia-framework', 'aurelia-http-client', 'jquery', 'datatables'], function (_export, _context) {
    "use strict";

    var inject, HttpClient, $, dataTable, _dec, _class, ViewOffenders;

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
        }, function (_jquery) {
            $ = _jquery.default;
        }, function (_datatables) {
            dataTable = _datatables.default;
        }],
        execute: function () {
            _export('ViewOffenders', ViewOffenders = (_dec = inject(HttpClient), _dec(_class = function () {
                function ViewOffenders(http) {
                    _classCallCheck(this, ViewOffenders);

                    this.http = http;
                }

                ViewOffenders.prototype.activate = function activate() {
                    var _this = this;

                    return this.http.get('/api/offender').then(function (response) {
                        _this.html = response.content.html;
                    });
                };

                ViewOffenders.prototype.attached = function attached() {
                    $('#offendersTable').dataTable({
                        "scrollX": true
                    });
                };

                return ViewOffenders;
            }()) || _class));

            _export('ViewOffenders', ViewOffenders);
        }
    };
});
//# sourceMappingURL=view-offenders.js.map
