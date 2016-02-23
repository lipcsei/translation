'use strict';

const gulp  = require('gulp');
const mocha = require('gulp-mocha');
const exit  = require('gulp-exit');

gulp.task('test', () => {
    return gulp
        .src('tests/**/*.**', {read : false})
        .pipe(mocha({
            reporter       : 'spec',
            ui             : 'bdd',
            growl          : true,
            timeout        : 2000,
            useColors      : true,
            useInlineDiffs : true
        }))
        .pipe(exit());
});

gulp.task('default', ['test'], next => next());