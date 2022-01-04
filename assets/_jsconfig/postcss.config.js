module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss/nesting'),
    require('tailwindcss')(__dirname + '/tailwind.config.js'),
    require('autoprefixer'),
    require('cssnano'),
  ]
}
