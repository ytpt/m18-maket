function defaultTask(cb) {
    var gulp = require( 'gulp' );
    var sourcemaps = require( 'gulp-sourcemaps' );

    var cssNdb = require( 'gulp-css-nbd' );
    var concat = require( 'gulp-concat' );

    var postcss = require( 'gulp-postcss' );
    var precss = require( 'precss' );
    var autoprefixer = require( 'autoprefixer' );
    var closest = require( 'postcss-closest' );

    gulp.task(
        'styles',
        function ()
        {
            var precssOptions = {
                extension: 'pcss',
                // Текущая версия postcss-partial-import в PreCSS не поддерживает `dirs`
                dirs: ['./styles/src/_globals/']
            };

            gulp.src( './src/style.css' )
                // .pipe( sourcemaps.init() )
                // gulp-css-nbd в настоящий момент не работает с sourcemaps
                .pipe( cssNdb() )
                .pipe( postcss( [precss( precssOptions ), closest, autoprefixer] ) )
                .pipe( concat( 'common.css' ) )
                // .pipe( sourcemaps.write( '.' ) )
                .pipe( gulp.dest( './styles/' ) );
        }
    );

exports.default = defaultTask