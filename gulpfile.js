var gulp = require("gulp"), // Подключаем Gulp
	sass = require("gulp-sass"), //Подключаем Sass пакет,
	// concat = require("gulp-concat"), // Подключаем gulp-concat (для конкатенации файлов)
	// cssnano = require("gulp-cssnano"), // Подключаем пакет для минификации CSS
	rename = require("gulp-rename"), // Подключаем библиотеку для переименования файлов
	autoprefixer = require("gulp-autoprefixer"), // Подключаем библиотеку для автоматического добавления префиксов
	sourcemaps = require('gulp-sourcemaps')

const scss_styles_watch = 'assets/scss/**/*.scss'
const scss_styles_input = 'assets/scss/style.scss';
const css_output = 'assets/css/';

// собираем main
gulp.task("sass", function () {
	// Создаем таск Sass
	return gulp
		.src(scss_styles_input) // Берем источник
		.pipe(sourcemaps.init())
		.pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
		.pipe(
			autoprefixer(["last 5 versions", "> 1%", "ie 8", "ie 7"], {
				cascade: true,
			})
		) // Создаем префиксы
		.pipe(rename({ suffix: ".min" }))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(css_output)) // Выгружаем результата в папку app/css
});



gulp.task("watch", function () {
	gulp.watch(scss_styles_watch, gulp.parallel("sass")); // Наблюдение за sass файлами
});


//точка запуска
gulp.task(
	"default",
	gulp.parallel("watch")
);