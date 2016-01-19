
import {Router} from 'aurelia-router';

export class App {
	static inject() { return [Router]; }
	constructor(router) {
		this.router = router;
		this.router.configure(config => {
			config.title = 'RJL';
		  	config.map([
		  		{ route: ['', 'home'], moduleId: 'home', nav: true, title:'Home' },
		  		{ route: ['cases'], moduleId: 'cases', nav: true, title:'Cases' }
		  	]);
		});
	}

	activate() {
		if (typeof userObj !== "undefined") {
			this.user = userObj;
		}
	}
}
