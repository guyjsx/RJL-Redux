'use strict';

System.register(['aurelia-framework', 'aurelia-http-client'], function (_export, _context) {
  "use strict";

  var inject, HttpClient, _dec, _class, Home;

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
      _export('Home', Home = (_dec = inject(HttpClient), _dec(_class = function () {
        function Home(http) {
          _classCallCheck(this, Home);

          this.http = http;
        }

        Home.prototype.configureRouter = function configureRouter(config, router) {
          config.map([{ route: ["", "cases/view"], moduleId: 'view-case', nav: true, title: 'Case View' }, { route: ["create"], moduleId: 'create-case', nav: true, title: 'Case Create' }, { route: ["edit"], moduleId: 'edit-case', nav: false, title: 'Edit Case' }]);
        };

        Home.prototype.activate = function activate() {};

        Home.prototype.attached = function attached() {};

        return Home;
      }()) || _class));

      _export('Home', Home);
    }
  };
});
//# sourceMappingURL=home.js.map
