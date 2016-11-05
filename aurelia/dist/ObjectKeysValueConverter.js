"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var ObjectKeysValueConverter;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _export("ObjectKeysValueConverter", ObjectKeysValueConverter = function () {
                function ObjectKeysValueConverter() {
                    _classCallCheck(this, ObjectKeysValueConverter);
                }

                ObjectKeysValueConverter.prototype.toView = function toView(obj) {
                    var temp = [];

                    for (var prop in obj) {
                        if (obj.hasOwnProperty(prop)) {
                            temp.push(obj[prop]);
                        }
                    }

                    return temp;
                };

                return ObjectKeysValueConverter;
            }());

            _export("ObjectKeysValueConverter", ObjectKeysValueConverter);
        }
    };
});
//# sourceMappingURL=ObjectKeysValueConverter.js.map
