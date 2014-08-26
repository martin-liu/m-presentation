gulp = require "gulp"
deploy = require "gulp-gh-pages"

src =
  cwd: 'src/**/*.*'
  js: 'src/js/**/*.js'
  css: 'src/css/**/*.css'
  html: 'src/**/*.html'

deps =
  impress:
    js: 'bower_components/impress.js/js/impress.js'
    css: 'bower_components/impress.js/css/impress-demo.css'

dist =
  cwd: 'dist'

deployOpts =
  branch: "gh-pages"

gulp.task 'dist', ->
  gulp.src src.cwd
  .pipe gulp.dest dist.cwd

  gulp.src deps.impress.js
  .pipe gulp.dest "#{dist.cwd}/js"

  gulp.src deps.impress.css
  .pipe gulp.dest "#{dist.cwd}/css"

gulp.task 'deploy', ['dist'], ->
  gulp.src "./dist/**/*"
  .pipe deploy(deployOpts)

gulp.task 'watch', ->
  gulp.watch src.cwd, [dist]
