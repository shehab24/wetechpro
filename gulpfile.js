const gulp = require('gulp');
const del = require('del');

// Dynamically import gulp-zip
async function getZip() {
	const { default: zip } = await import('gulp-zip');
	return zip;
}

gulp.task('clean', () => {
	return del([
		'languages',
		'bundled'
	]);
});

exports.bundle = async () => {
	const zip = await getZip();
	return gulp.src([
		'**/*',
		'!bundled/**',
		'!node_modules/**',
		'!src/**',
		'!.eslintrc.js',
		'!.gitignore',
		'!gulpfile.js',
		'!composer.json',
		'!composer.lock',
		'!package.json',
		'!package-lock.json',
		'!readme.md',
		'!todo.txt',
		'!webpack.config.js',
		'!postcss.config.js',
		'!tailwind.config.js',
	])
		.pipe(zip('wetechpro.zip'))
		.pipe(gulp.dest('bundled'));
};
