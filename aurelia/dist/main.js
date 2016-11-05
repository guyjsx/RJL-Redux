'use strict';

System.register(['bootstrap'], function (_export, _context) {
  "use strict";

  function configure(aurelia) {
    aurelia.use.standardConfiguration().developmentLogging();

    aurelia.start().then(function (a) {
      return a.setRoot('app');
    });
  }

  _export('configure', configure);

  return {
    setters: [function (_bootstrap) {}],
    execute: function () {}
  };
});
//# sourceMappingURL=main.js.map
