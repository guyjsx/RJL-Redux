'use strict';

System.register(['aurelia-framework', 'aurelia-http-client', 'jquery', 'datatables'], function (_export, _context) {
    "use strict";

    var inject, HttpClient, $, dataTable, _dec, _class, ViewVictims;

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
            _export('ViewVictims', ViewVictims = (_dec = inject(HttpClient), _dec(_class = function () {
                function ViewVictims(http) {
                    _classCallCheck(this, ViewVictims);

                    this.http = http;
                }

                ViewVictims.prototype.activate = function activate() {
                    var _this = this;

                    return this.http.get('/api/victim').then(function (response) {
                        _this.html = response.content.html;
                    });
                };

                ViewVictims.prototype.attached = function attached() {
                    $('#victimsTable').dataTable({
                        "scrollX": true
                    });
                };

                return ViewVictims;
            }()) || _class));

            _export('ViewVictims', ViewVictims);
        }
    };
});
//# sourceMappingURL=view-victims.js.map
