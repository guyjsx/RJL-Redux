
import {Router} from 'aurelia-router';
import {HttpClient} from 'aurelia-http-client';

export class App {
	static inject() { return [Router, HttpClient]; }
	constructor(router, http) {
		this.router = router;
        this.http = http;

        var routerMap = [];


        if (typeof userObj !== "undefined") {
            if (userObj.role !== "facilitator") {
                var routerMap = [
                    { route: ['', 'home/'], moduleId: 'home', nav: true, title:'Home' },
                    { route: ['cases/'], moduleId: 'cases', nav: true, title:'Cases' },
                    { route: ['victim/'], moduleId: 'victims', nav: true, title:'Victims' },
                    { route: ['offender/'], moduleId: 'offenders', nav: true, title:'Offenders' },
                    { route: ['users/'], moduleId: 'users', nav: true, title:'Users' }
                ];
            } else if (userObj.role == "facilitator") {
                var routerMap = [
                    { route: ['', 'home/'], moduleId: 'home', nav: true, title:'Home' },
                    { route: ['cases/'], moduleId: 'cases', nav: true, title:'Cases' }
                ];
            }
        }

		this.router.configure(config => {
			config.title = 'Parent';
			config.parent = "true";
            config.map(routerMap);
		});
	}

	activate() {
		this.user = userObj;
        console.log('tes');
	}
}
