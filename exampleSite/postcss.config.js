module.exports = {
  plugins: [
    require('tailwindcss/nesting'),
    require('tailwindcss')(__dirname + '/tailwind.config.js'),
    require('autoprefixer'),
    require('cssnano'),
  ]
}
