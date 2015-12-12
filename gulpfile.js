/* global require */

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    nodemon = require('gulp-nodemon'),
    del = require('del'),
    os = require('os'),
    chalk = require('chalk');

gulp.task('default', ['usage']);

gulp.task('usage', function() {
    "use strict";
    
    var usageLines = [
        '',
        '',
        chalk.green('usage'),
        '\tdisplay this help page.',
        '',
        chalk.green('start'),
        '\t runs the app server.',
        '',
        chalk.green('clean'),
        '\tdeletes the npm_modules directory.',
        '\t' + chalk.magenta('NOTE:') + ' ' + chalk.green('npm install') +
        ' will be required before running the app.',
        ''
    ];
    gutil.log(usageLines.join(os.EOL));
});

gulp.task('start', function() {
    "use strict";

    nodemon({
        script: 'server/server.js',
        env: { 'NODE_ENV': 'development' }
    });
});

gulp.task('clean', function() {
    "use strict";

    return del(['node_modules']);
});