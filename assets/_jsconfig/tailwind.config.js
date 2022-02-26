const baseDir = __dirname + '/../..'
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
	content: [
    baseDir + '/layouts/**/*.html',
    baseDir + '/assets/**/*.{js,html}'
  ],
  theme: {
    fontFamily: {
      sans: [ '"Noto Sans KR"', ...fontFamily.sans],
      heading: [ '"Noto Serif KR"', ...fontFamily.serif]
    },
  },
	plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography')
  ]
};
