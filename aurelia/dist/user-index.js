'use strict';

System.register(['aurelia-framework', 'aurelia-http-client', 'jquery', 'datatables'], function (_export, _context) {
    "use strict";

    var inject, HttpClient, $, dataTable, _dec, _class, UserIndex;

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
            _export('UserIndex', UserIndex = (_dec = inject(HttpClient), _dec(_class = function () {
                function UserIndex(http) {
                    _classCallCheck(this, UserIndex);

                    this.http = http;
                }

                UserIndex.prototype.activate = function activate() {
                    var _this = this;

                    return this.http.get('/api/users').then(function (response) {
                        _this.users = response.content.data;
                    });
                };

                UserIndex.prototype.attached = function attached() {
                    $('#userTable').dataTable({});
                };

                return UserIndex;
            }()) || _class));

            _export('UserIndex', UserIndex);
        }
    };
});
//# sourceMappingURL=user-index.js.map
