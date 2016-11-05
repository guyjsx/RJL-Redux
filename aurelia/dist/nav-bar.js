'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
    "use strict";

    var Behavior, NavBar;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            Behavior = _aureliaFramework.Behavior;
        }],
        execute: function () {
            _export('NavBar', NavBar = function () {
                function NavBar() {
                    _classCallCheck(this, NavBar);
                }

                NavBar.metadata = function metadata() {
                    return Behavior.withProperty('router');
                };

                return NavBar;
            }());

            _export('NavBar', NavBar);
        }
    };
});
//# sourceMappingURL=nav-bar.js.map
