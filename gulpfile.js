// Generated by CoffeeScript 1.7.1
var deploy, deps, dist, gulp, src;

gulp = require("gulp");

deploy = require("gulp-gh-pages");

src = {
  cwd: 'src/**/*.*',
  js: 'src/js/**/*.js',
  css: 'src/css/**/*.css',
  html: 'src/**/*.html'
};

deps = {
  impress: {
    js: 'bower_components/impress.js/js/impress.js',
    css: 'bower_components/impress.js/css/impress-demo.css'
  }
};

dist = {
  cwd: 'dist'
};

gulp.task('dist', function() {
  gulp.src(src.cwd).pipe(gulp.dest(dist.cwd));
  gulp.src(deps.impress.js).pipe(gulp.dest("" + dist.cwd + "/js"));
  return gulp.src(deps.impress.css).pipe(gulp.dest("" + dist.cwd + "/css"));
});

gulp.task('deploy', ['dist'], function() {
  return gulp.src("./dist/**/*").pipe(deploy());
});

gulp.task('watch', function() {
  return gulp.watch(src.cwd, [dist]);
});