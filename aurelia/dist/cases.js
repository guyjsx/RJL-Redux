'use strict';

System.register(['aurelia-framework', 'aurelia-http-client'], function (_export, _context) {
	"use strict";

	var inject, HttpClient, _dec, _class, Cases;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	return {
		setters: [function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
		}, function (_aureliaHttpClient) {
			HttpClient = _aureliaHttpClient.HttpClient;
		}],
		execute: function () {
			_export('Cases', Cases = (_dec = inject(HttpClient), _dec(_class = function () {
				function Cases(http) {
					_classCallCheck(this, Cases);

					this.http = http.configure(function (x) {
						x.withHeader('X-CSRF-TOKEN', getCookie("XSRF-TOKEN"));
					});

					function getCookie(name) {
						var re = new RegExp(name + "=([^;]+)");
						var value = re.exec(document.cookie);
						return value != null ? unescape(value[1]) : null;
					}
				}

				Cases.prototype.configureRouter = function configureRouter(config, router) {
					var routerMap = [];

					if (typeof userObj !== "undefined") {
						if (userObj.role !== "facilitator") {
							var routerMap = [{ route: ["", "cases/view"], moduleId: 'view-case', nav: true, title: 'Case View' }, { route: ["create"], moduleId: 'create-case', nav: true, title: 'Case Create' }, { route: ["edit"], name: 'edit-case', moduleId: 'edit-case', nav: false, title: 'Edit Case' }];
						} else if (userObj.role == "facilitator") {
							var routerMap = [{ route: ["", "cases/view"], moduleId: 'view-case', nav: true, title: 'Case View' }, { route: ["edit/"], name: 'edit-case', moduleId: 'edit-case', nav: false, title: 'Edit Case' }];
						}
					}

					config.map(routerMap);

					this.router = router;
				};

				return Cases;
			}()) || _class));

			_export('Cases', Cases);
		}
	};
});
//# sourceMappingURL=cases.js.map
