"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var FileListToArrayValueConverter, BlobToUrlValueConverter;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _export("FileListToArrayValueConverter", FileListToArrayValueConverter = function () {
                function FileListToArrayValueConverter() {
                    _classCallCheck(this, FileListToArrayValueConverter);
                }

                FileListToArrayValueConverter.prototype.toView = function toView(fileList) {
                    var files = [];
                    if (!fileList) {
                        return files;
                    }
                    for (var i = 0; i < fileList.length; i++) {
                        files.push(fileList[i]);
                    }
                    return files;
                };

                return FileListToArrayValueConverter;
            }());

            _export("FileListToArrayValueConverter", FileListToArrayValueConverter);

            _export("BlobToUrlValueConverter", BlobToUrlValueConverter = function () {
                function BlobToUrlValueConverter() {
                    _classCallCheck(this, BlobToUrlValueConverter);
                }

                BlobToUrlValueConverter.prototype.toView = function toView(blob) {
                    return URL.createObjectURL(blob);
                };

                return BlobToUrlValueConverter;
            }());

            _export("BlobToUrlValueConverter", BlobToUrlValueConverter);
        }
    };
});
//# sourceMappingURL=FileListToArrayValueConverter.js.map
