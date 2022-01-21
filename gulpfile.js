"use strict";
const { watch, src, dest, parallel, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
<<<<<<< HEAD
// variables -- don't change nothing
=======

// variables -- don't change nothing

>>>>>>> 593bda1e42b423c2789a01a77ef1da488f39d885
// The source folder
const the_source_folder = "./src";
// The destination folder
const the_destination_folder = "./dist";
<<<<<<< HEAD
// array of folders
const folders = ["sass", "components", "layout", "pages", "sass-utils", "vendors", "base"];
=======

// array of folders
const folders = [
  "sass",
  "components",
  "layout",
  "pages",
  "sass-utils",
  "vendors",
  "base",
];

>>>>>>> 593bda1e42b423c2789a01a77ef1da488f39d885
// Sass watch file variable
const sass_watch = "./src/sass/**/**.scss";
// sass source file
const sass_source = "./src/sass/style.scss";
<<<<<<< HEAD
// Css destination within dist
const dist_css = "./dist/css";
// Tasks
function build() {
        return src("*.*", { read: false })
                .pipe(dest(the_source_folder))
                .pipe(dest(the_destination_folder))
                .pipe(dest(`${the_source_folder}/${folders[0]}`))
                .pipe(dest(`${the_source_folder}/${folders[0]}/${folders[1]}`))
                .pipe(dest(`${the_source_folder}/${folders[0]}/${folders[2]}`))
                .pipe(dest(`${the_source_folder}/${folders[0]}/${folders[3]}`))
                .pipe(dest(`${the_source_folder}/${folders[0]}/${folders[4]}`))
                .pipe(dest(`${the_source_folder}/${folders[0]}/${folders[5]}`))
                .pipe(dest(`${the_source_folder}/${folders[0]}/${folders[6]}`));
}
function watching() {
        watch([sass_watch], function () {
                return src(sass_source).pipe(sass().on("error", sass.logError)).pipe(dest(dist_css));
        });
}
=======

// Css destination within dist
const dist_css = "./dist/css";

// Tasks
function build() {
  return src("*.*", { read: false })
    .pipe(dest(the_source_folder))
    .pipe(dest(the_destination_folder))
    .pipe(dest(`${the_source_folder}/${folders[0]}`))
    .pipe(dest(`${the_source_folder}/${folders[0]}/${folders[1]}`))
    .pipe(dest(`${the_source_folder}/${folders[0]}/${folders[2]}`))
    .pipe(dest(`${the_source_folder}/${folders[0]}/${folders[3]}`))
    .pipe(dest(`${the_source_folder}/${folders[0]}/${folders[4]}`))
    .pipe(dest(`${the_source_folder}/${folders[0]}/${folders[5]}`))
    .pipe(dest(`${the_source_folder}/${folders[0]}/${folders[6]}`));
}

function watching() {
  watch([sass_watch], function () {
    return src(sass_source)
      .pipe(sass().on("error", sass.logError))
      .pipe(dest(dist_css));
  });
}

>>>>>>> 593bda1e42b423c2789a01a77ef1da488f39d885
exports.default = series(build, watching);
