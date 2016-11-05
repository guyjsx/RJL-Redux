'use strict';

System.register(['aurelia-framework', 'aurelia-http-client', 'jquery', 'datatables'], function (_export, _context) {
    "use strict";

    var inject, HttpClient, $, dataTable, _dec, _class, ViewCase;

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
            _export('ViewCase', ViewCase = (_dec = inject(HttpClient), _dec(_class = function () {
                function ViewCase(http) {
                    _classCallCheck(this, ViewCase);

                    this.http = http;
                }

                ViewCase.prototype.activate = function activate() {
                    var _this = this;

                    return this.http.get('/api/user/assignments').then(function (response) {
                        _this.assignments = response.content;
                    });
                };

                ViewCase.prototype.attached = function attached() {
                    $('#facilitatorAssignTable').dataTable();
                };

                return ViewCase;
            }()) || _class));

            _export('ViewCase', ViewCase);
        }
    };
});
//# sourceMappingURL=admin-facilitator-assign.js.map
