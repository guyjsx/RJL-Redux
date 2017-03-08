import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject (HttpClient)
export class AdminReports {
    constructor(http) {
        this.http = http;
    }

    activate() {
        this.selectedReportType = "";
        this.selectedCaseType = "";
        this.selectedCaseStatus = "";
        this.showUserName = 0;
        this.http.get('/api/reports/index')
            .then(response => {
                this.token = response.content.token
            })
    }

    attached() {

    }

    autoFillReportParamsByType(reportType) {
        switch(reportType) {
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
    }

    autoFill(caseType, caseStatus) {
        this.selectedCaseType = caseType;
        this.selectedCaseStatus = caseStatus;
    }

}