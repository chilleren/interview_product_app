var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat");

//compile sass into css
gulp.task("sass", function () {
  return gulp.src("./public/stylesheets/style.scss")
    .pipe(sass())
    .pipe(gulp.dest("./public"))
});

//concatenate js files and angular dependencies
gulp.task("js", function () {
  gulp.src([
      "./node_modules/angular/angular.js", 
      "./node_modules/angular-resource/angular-resource.js", 
      "./node_modules/angular-route/angular-route.js", 
      "./public/js/**/*.js"
    ])
    .pipe(concat("bundle.js"))
    .pipe(gulp.dest("./public"));
});

//watcher for convenient development
gulp.task("watch", function () {
  gulp.watch("./public/stylesheets/**/*", ["sass"]);
  gulp.watch("./public/js/**/*", ["js"]);
});

gulp.task("dev", ["sass", "js", "watch"]);
gulp.task("default", ["sass", "js"]);