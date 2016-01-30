import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import $ from 'jquery';
import dataTable from 'datatables';

@inject (HttpClient)
export class ViewCase {
    constructor(http) {
        this.http = http;
    }

    activate() {
        return this.http.get('/api/cases').then(response => {
            this.html = response.content.html;
        });
    }

    attached() {
        $('#casesTable').dataTable( {
            scrollY:        '30vh',
            scrollCollapse: true,
            paging:         false
        });

        function resizeChart() {
            $('.caseStatusReportContainer').css("height",  $('.panel.panel-default').height());
        }

        resizeChart();

       $(window).resize(function() {
            resizeChart();
       }); 
      


        var ctx = document.getElementById("case-status-report").getContext("2d");

        var data = {
            labels: [ 'Open', 'Closed' ],
            datasets: [
                {
                    data: [ 65, 59 ],
                    fillColor: "#ff6000"
                },
                {
                    data: [ 45, 80 ],
                    fillColor: "#1ac65b"
                }
            ]
        }

        var caseStatusReportBarChart = new Chart(ctx).Bar(data, {
            responsive: true,
            maintainAspectRatio: false
        });
    }
}