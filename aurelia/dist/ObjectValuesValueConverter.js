"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var ObjectValuesValueConverter;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _export("ObjectValuesValueConverter", ObjectValuesValueConverter = function () {
                function ObjectValuesValueConverter() {
                    _classCallCheck(this, ObjectValuesValueConverter);
                }

                ObjectValuesValueConverter.prototype.toView = function toView(obj) {
                    var temp = [];

                    for (var _iterator = obj, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
                        var _ref;

                        if (_isArray) {
                            if (_i >= _iterator.length) break;
                            _ref = _iterator[_i++];
                        } else {
                            _i = _iterator.next();
                            if (_i.done) break;
                            _ref = _i.value;
                        }

                        var val = _ref;

                        temp.push(val);
                    }

                    return temp;
                };

                return ObjectValuesValueConverter;
            }());

            _export("ObjectValuesValueConverter", ObjectValuesValueConverter);
        }
    };
});
//# sourceMappingURL=ObjectValuesValueConverter.js.map
