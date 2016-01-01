// variables
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    input = './app/sass/*.sass',
    output = './app/style',
    connect = require('gulp-connect'),
    sassOptions = { 
        errLogToConsole: true,
        outputStyle: 'expanded'
    };

// default task
gulp.task('default', ['sass', 'watch', 'connect']);

// watch task
gulp.task('watch', function() { 
  gulp.watch(['./app/*.html']);
  gulp.watch(input, ['sass']);
  gulp.on('change', function(event) { 
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  })
});

// connect task
gulp.task('connect', function() { 
  connect.server({ 
    root: 'app',
    port: 7000,
    livereload: true
  });
});

gulp.task('html', function() { 
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

// gulp sass task
gulp.task('sass', function() { 
    return gulp
        .src(input)
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(gulp.dest(output));
});

