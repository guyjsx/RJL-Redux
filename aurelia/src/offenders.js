import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject (HttpClient)
export class Offenders {
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
            { route: ["","offender/view/"], moduleId: 'src/view-offenders', nav: true, title:'Offender View' },
            { route: ["create"], moduleId: 'src/create-offender', nav: true, title:'Offender Create' },
            { route: ["edit"], name:'edit-offender', moduleId: 'src/edit-offender', nav: false, title:'Offender Edit' }
        ]);

        this.router = router;
    }
}
