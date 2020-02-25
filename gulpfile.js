const gulp       = require('gulp'),
	fs           = require('fs'),
	path         = require('path'),
	pkg          = require('./package.json'),

	autoprefixer = require('autoprefixer'),
	concat       = require('gulp-concat'),
	eslint       = require('gulp-eslint'),
	merge        = require('merge-stream'),
	modernizr    = require('gulp-modernizr'),
	pngquant     = require('gulp-pngquant'),
	postcss      = require('gulp-postcss'),
	raster       = require('gulp-raster'),
	rename       = require('gulp-rename'),
	sass         = require('gulp-sass'),
	sassLint     = require('gulp-sass-lint'),
	sourcemaps   = require('gulp-sourcemaps'),
	svgmin       = require('gulp-svgmin'),
	through2     = require('through2'),
	uglify       = require('gulp-uglify'),

	banner       = '/*! ${pkg.name} - v${pkg.version} */\n',
	target       = process.env.CONTEXT == 'production' ? 'dist' : 'dev',
	isDist       = target == 'dist';

function getFolders(dir) {
	return fs.readdirSync(dir)
		.filter(function(file) {
			return fs.statSync(path.join(dir, file)).isDirectory();
		});
}


// SCSS
css.description = 'Compile .scss files';
function css() {
	return gulp.src(path.join(pkg.srcDir, 'scss', '/*.scss'))
		.pipe(!isDist ? sourcemaps.init() : through2.obj())
		.pipe(sass({
			outputStyle: isDist ? 'compressed' : 'compact',
			precision: 3,
		}))
		.pipe(postcss([
			autoprefixer({
				overrideBrowserslist: ['last 2 versions'],
				cascade: false
			}),
		]))
		.pipe(!isDist ? sourcemaps.write() : through2.obj())
		.pipe(gulp.dest( path.join(pkg.buildDir, pkg.assetsDir)	));
}

cssLint.description = 'Lint .scss files';
function cssLint() {
	return gulp.src(path.join(pkg.srcDir, 'scss', '/**/*.scss'))
		.pipe(sassLint())
		.pipe(sassLint.format())
		.pipe(sassLint.failOnError());
}

// JS
js.description = 'Concat and uglify .js files';
function js() {
	var src = path.join(pkg.srcDir, 'js');

	return merge(getFolders(src).map(function(dir) {
		return gulp.src(path.join(src, dir, '/**/*.js'))
			.pipe(!isDist ? sourcemaps.init() : through2.obj())
			.pipe(concat(dir + '.js'))
			.pipe(uglify({
				compress: {
					drop_console: isDist
				}
			}))
			.pipe(!isDist ? sourcemaps.write() : through2.obj())
			.pipe(gulp.dest( path.join(pkg.buildDir, pkg.assetsDir)	));
	}));
}

jsLint.description = 'Lint .js files';
function jsLint() {
	return gulp.src(path.join(pkg.srcDir, 'js', '/**/*.js'))
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failOnError());
}


// Modernizr
modernize.description = 'Scan source files for Modernizr references, then build it';
function modernize() {
	return gulp.src('{js,scss}/**/*.{js,scss}', { cwd: pkg.srcDir })
		.pipe(modernizr({
			options: [
				"setClasses",
				"addTest",
				"html5printshiv",
				"testProp",
				"fnBind"
			]
		}))
		.pipe(uglify({
			mangle: false,
		}))
		.pipe(gulp.dest( path.join(pkg.buildDir, pkg.assetsDir)	));
}

// Fonts
fonts.description = 'Copy font-awesome font files from node_modules';
function fonts() {
	return gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
		.pipe(gulp.dest( path.join(pkg.buildDir, pkg.assetsDir, 'fonts') ));
}

// SVG
svg = gulp.series(svgo, svg2png);
svg.description = 'Minify .svg files, then rasterize and optimize them';

function svgo() {
	return gulp.src(path.join(pkg.srcDir, 'svg', '/**/*.svg'))
		.pipe(svgmin({
			plugins: [
				{ removeDimensions: true },
				{ removeViewBox: false },
				{ removeUselessStrokeAndFill: true },
				{ cleanupIDs: false },
			],
		}))
		.pipe(gulp.dest( path.join(pkg.buildDir, pkg.assetsDir, 'images') ));
}

function svg2png() {
	return gulp.src(path.join(pkg.srcDir, 'svg', '/**/*.svg'))
		.pipe(raster({
			format: 'png',
			scale: 1,
		}))
		.pipe(rename({
			extname: '.png',
		}))
		.pipe(pngquant({
			quality: '65-80',
		}))
		.pipe(gulp.dest( path.join(pkg.buildDir, pkg.assetsDir, 'images') ));
}

function watch() {
	gulp.watch(path.join(pkg.srcDir, 'js/**/*.js'), gulp.series(modernize, jsLint, js));
	gulp.watch(path.join(pkg.srcDir, 'scss/**/*.scss'), gulp.series(modernize, cssLint, css));
	gulp.watch(path.join(pkg.srcDir, 'svg/**/*.svg'), svg);
}

// Tasks
gulp.task('css', gulp.series(cssLint, css));
gulp.task('js', gulp.series(jsLint, js));
gulp.task('modernizr', modernize);
gulp.task('svg', svg);

gulp.task('watch', watch);
gulp.task('build', gulp.series(jsLint, cssLint, modernize, js, css, fonts, svg));
