import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import $ from 'jquery';
import dataTable from 'datatables';

@inject (HttpClient)
export class Victims {
    constructor(http) {
        this.http = http
            .configure(x => {
                x.withHeader('X-CSRF-TOKEN', getCookie("XSRF-TOKEN"));
            });

        function getCookie(name)
        {
            var re = new RegExp(name + "=([^;]+)");
            var value = re.exec(document.cookie);
            return (value != null) ? unescape(value[1]) : null;
        }
    }

    configureRouter(config, router) {
        config.map([
            { route: ["","victim/view/"], moduleId: 'view-victims', nav: true, title:'Victim View' },
            { route: ["create"], moduleId: 'create-victim', nav: true, title:'Victim Create' },
            { route: ["edit"], name:'edit-victim', moduleId: 'edit-victim', nav: false, title:'Victim Edit' }
        ]);

        this.router = router;
    }
}
