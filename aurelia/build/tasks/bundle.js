var gulp = require('gulp');
var bundler = require('aurelia-bundler');

var config = {
    force: true,
    baseURL: '.',
    configPath: './config.js',
    bundles: {
        "src/dist/app-build": {
            includes: [
                "[**/*.js]",
                "**/*.html!text",
                "**/*.css!text"
            ],
            options: {
                inject: true,
                minify: true
            }
        },
        "src/dist/vendor-build": {
            includes: [
                "aurelia-framework",
                "aurelia-bootstrapper",
                "aurelia-fetch-client",
                "aurelia-router",
                "aurelia-animator-css",
                "aurelia-templating-binding",
                "aurelia-templating-resources",
                "aurelia-templating-router",
                "aurelia-loader-default",
                "aurelia-history-browser",
                "aurelia-logging-console",
                "bootstrap",
                "bootstrap/css/bootstrap.css!text",
                "fetch"
            ],
            options: {
                inject: true,
                minify: true
            }
        }
    }
};

gulp.task('bundle', function() {
    return bundler.bundle(config);
});

gulp.task('unbundle', function() {
    return bundler.unbundle(config);
});