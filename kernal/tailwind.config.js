module.exports = {
  presets: [
    require('@rtkwlf/design-system/dist/tailwind.config.js')
  ],
  darkMode: 'media',
  purge: ['./pages/**/*.js', './components/**/*.js'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
}
