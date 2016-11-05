'use strict';

System.register(['aurelia-framework', 'select2'], function (_export, _context) {
    "use strict";

    var customAttribute, inject, select2, _dec, _dec2, _class, Select2CustomAttribute;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            customAttribute = _aureliaFramework.customAttribute;
            inject = _aureliaFramework.inject;
        }, function (_select) {
            select2 = _select.default;
        }],
        execute: function () {
            _export('Select2CustomAttribute', Select2CustomAttribute = (_dec = customAttribute('select2'), _dec2 = inject(Element), _dec(_class = _dec2(_class = function () {
                function Select2CustomAttribute(element) {
                    _classCallCheck(this, Select2CustomAttribute);

                    this.element = element;
                }

                Select2CustomAttribute.prototype.attached = function attached() {
                    var _this = this;

                    $(this.element).select2(this.value).on('change', function (evt) {
                        if (evt.originalEvent) {
                            return;
                        }
                        _this.element.dispatchEvent(new Event('change'));
                    });
                };

                Select2CustomAttribute.prototype.detached = function detached() {
                    $(this.element).select2('destroy');
                };

                return Select2CustomAttribute;
            }()) || _class) || _class));

            _export('Select2CustomAttribute', Select2CustomAttribute);
        }
    };
});
//# sourceMappingURL=custom-select.js.map
