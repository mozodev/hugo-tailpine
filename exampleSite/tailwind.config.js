const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
	content: [
    '../layouts/**/*.html',
    '../assets/**/*.{js,html}',
    './content/**/*.md',
    './hugo_stats.json'
  ],
  theme: {
    fontFamily: {
      sans: [ '"Noto Sans KR"', ...fontFamily.sans],
      heading: [ '"Noto Serif KR"', ...fontFamily.serif]
    },
  }
};
