import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject (HttpClient)
export class Cases {
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
        var routerMap = [];

        if (typeof userObj !== "undefined") {
            if (userObj.role !== "facilitator") {
                var routerMap = [
                    { route: ["","cases/view"], moduleId: 'src/view-case', nav: true, title:'Case View' },
                    { route: ["create"], moduleId: 'src/create-case', nav: true, title:'Case Create' },
                    { route: ["edit"], name: 'edit-case', moduleId: 'src/edit-case', nav: false, title:'Edit Case' }
                ];
            } else if (userObj.role == "facilitator") {
                var routerMap = [
                    { route: ["","cases/view"], moduleId: 'src/view-case', nav: true, title:'Case View' },
                    { route: ["edit/"], name: 'edit-case', moduleId: 'src/edit-case', nav: false, title:'Edit Case' }
                ];
            }
        }

		config.map(routerMap);

		this.router = router;
	}
}
