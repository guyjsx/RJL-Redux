var gulp = require('gulp');
var bundler = require('aurelia-bundler');

var config = {
    force: true,
    baseURL: '.',
    configPath: './config.js',
    bundles: {
        "src/src/app-build": {
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
        "src/src/aurelia": {
            includes: [
                'aurelia-bootstrapper',
                'aurelia-fetch-client',
                'aurelia-router',
                'aurelia-animator-css',
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