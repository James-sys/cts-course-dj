var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var reload = browserSync.reload;

gulp.task("serve", function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch("index.html").on("change", reload);
  gulp.watch("styles.css").on("change", reload);
  gulp.watch("main.css").on("change", reload);
});
