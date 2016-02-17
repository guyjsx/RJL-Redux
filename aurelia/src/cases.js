import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import $ from 'jquery';
import dataTable from 'datatables';

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
		config.map([
			{ route: ["","cases/view"], moduleId: 'view-case', nav: true, title:'Case View' },
			{ route: ["create"], moduleId: 'create-case', nav: true, title:'Case Create' },
			{ route: ["edit"], moduleId: 'edit-case', nav: false, title:'Edit Case' }
		]);

		this.router = router;
	}
}
