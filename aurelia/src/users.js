import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject (HttpClient)
export class Users {
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
            { route: [""], moduleId: 'src/user-index', nav: true, title:'View All Users' },
            { route: ["/register"], moduleId: 'src/user-register', nav: true, title:'User Register' },
            { route: ["/edit/"], moduleId: 'src/user-edit', nav: false }
        ]);

        this.router = router;
    }
}
