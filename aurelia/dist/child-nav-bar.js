"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var ChildRouter;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _export("ChildRouter", ChildRouter = function () {
                function ChildRouter() {
                    _classCallCheck(this, ChildRouter);
                }

                ChildRouter.prototype.openNav = function openNav() {
                    document.getElementById("navbar-app").style.width = "250px";
                };

                ChildRouter.prototype.closeNav = function closeNav() {
                    document.getElementById("navbar-app").style.width = "0";
                };

                return ChildRouter;
            }());

            _export("ChildRouter", ChildRouter);
        }
    };
});
//# sourceMappingURL=child-nav-bar.js.map
