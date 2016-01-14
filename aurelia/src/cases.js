import {HttpClient} from 'aurelia-http-client';

export class Cases {
	static inject() { return [HttpClient]; }
	constructor(http) {
		this.http = http;
	}

	activate() {
		return this.http.get('/api/cases').then(response => {
			this.html = response.content.html;
		});
	}
}