'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
    "use strict";

    var Behavior, ChildNavBar;

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
            _export('ChildNavBar', ChildNavBar = function () {
                function ChildNavBar() {
                    _classCallCheck(this, ChildNavBar);
                }

                ChildNavBar.metadata = function metadata() {
                    return Behavior.withProperty('router');
                };

                return ChildNavBar;
            }());

            _export('ChildNavBar', ChildNavBar);
        }
    };
});
//# sourceMappingURL=child-nav-bar.js.map
