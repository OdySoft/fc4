'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src('SCSS/global.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('style'));
};

exports.buildStyles = buildStyles;
exports.watch = function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
};