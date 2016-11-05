'use strict';

System.register(['aurelia-framework', 'aurelia-http-client', 'jquery', 'datatables'], function (_export, _context) {
    "use strict";

    var inject, HttpClient, $, dataTable, _dec, _class, VictimTable;

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
            _export('VictimTable', VictimTable = (_dec = inject(HttpClient), _dec(_class = function () {
                function VictimTable(http) {
                    _classCallCheck(this, VictimTable);

                    this.http = http;
                }

                VictimTable.prototype.activate = function activate() {
                    this.victims = [{
                        victimId: "v1ID", firstName: "v1f", lastName: "v1l"
                    }, {
                        victimId: "v2ID", firstName: "v2f", lastName: "v2l"
                    }];
                };

                VictimTable.prototype.attached = function attached() {
                    $('#victimTable').dataTable({});
                };

                VictimTable.prototype.victimSearch = function victimSearch(searchStr) {

                    $('#victimModal').modal('show');
                };

                return VictimTable;
            }()) || _class));

            _export('VictimTable', VictimTable);
        }
    };
});
//# sourceMappingURL=victim-table.js.map
