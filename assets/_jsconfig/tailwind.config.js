const baseDir = __dirname + '/../..';
module.exports = {
  darkMode: 'class',
	content: [
    baseDir + '/layouts/**/*.html',
    baseDir + '/assets/**/*.{js,html}'
  ],
	plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography')
  ]
};
