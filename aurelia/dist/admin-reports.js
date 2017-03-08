'use strict';

System.register(['aurelia-framework', 'aurelia-http-client'], function (_export, _context) {
    "use strict";

    var inject, HttpClient, _dec, _class, AdminReports;

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
            _export('AdminReports', AdminReports = (_dec = inject(HttpClient), _dec(_class = function () {
                function AdminReports(http) {
                    _classCallCheck(this, AdminReports);

                    this.http = http;
                }

                AdminReports.prototype.activate = function activate() {
                    var _this = this;

                    this.selectedReportType = "";
                    this.selectedCaseType = "";
                    this.selectedCaseStatus = "";
                    this.showUserName = 0;
                    this.http.get('/api/reports/index').then(function (response) {
                        _this.token = response.content.token;
                    });
                };

                AdminReports.prototype.attached = function attached() {};

                AdminReports.prototype.autoFillReportParamsByType = function autoFillReportParamsByType(reportType) {
                    switch (reportType) {
                        case 'juvenile-report':
                            this.autoFill('juvenile', 'open-pending-monitoring');
                            break;
                        case 'adult-report':
                            this.autoFill('adult', 'open-pending-monitoring');
                            break;
                        case 'cdw-report':
                            this.autoFill('juvenile', 'open-pending-monitoring');
                            break;
                        case 'board-report':
                            this.autoFill('all', 'all');
                            break;
                        case 'user-case-history-report':
                            this.autoFill('all', 'all');
                            break;
                        case 'user-active-cases-report':
                            this.autoFill('all', 'open-pending');
                            break;
                        case 'victim-summary-report':
                            this.autoFill('all', 'all');
                            break;
                    }
                };

                AdminReports.prototype.autoFill = function autoFill(caseType, caseStatus) {
                    this.selectedCaseType = caseType;
                    this.selectedCaseStatus = caseStatus;
                };

                return AdminReports;
            }()) || _class));

            _export('AdminReports', AdminReports);
        }
    };
});
//# sourceMappingURL=admin-reports.js.map
