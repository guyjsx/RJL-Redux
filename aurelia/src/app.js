
import {Router} from 'aurelia-router';

export class App {
	static inject() { return [Router]; }
	constructor(router) {
		this.router = router;

        var routerMap = [];

        if (typeof userObj !== "undefined") {
            if (userObj.role !== "facilitator") {
                var routerMap = [
                    { route: ['', 'home/'], moduleId: 'src/home', nav: true, title:'Home' },
                    { route: ['cases/'], moduleId: 'src/cases', nav: true, title:'Cases' },
                    { route: ['victim/'], moduleId: 'src/victims', nav: true, title:'Victims' },
                    { route: ['offender/'], moduleId: 'src/offenders', nav: true, title:'Offenders' },
                    { route: ['users/'], moduleId: 'src/users', nav: true, title:'Users' }
                ];
            } else if (userObj.role == "facilitator") {
                var routerMap = [
                    { route: ['', 'home/'], moduleId: 'src/home', nav: true, title:'Home' },
                    { route: ['cases/'], moduleId: 'src/cases', nav: true, title:'Cases' }
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
		if (typeof userObj !== "undefined") {
			this.user = userObj;
		}
	}
}
