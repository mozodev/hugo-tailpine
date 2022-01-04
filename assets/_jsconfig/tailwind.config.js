const baseDir = __dirname + '/../..';
module.exports = {
	content: [
    baseDir + '/layouts/**/*.html',
    baseDir + '/assets/**/*.js'
	],
	plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography')
  ]
};
