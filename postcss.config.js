module.exports = {
  map: { inline: false },
  plugins: {
    'postcss-import': {},
    'postcss-assets': { basePath: 'public/assets' },
    'postcss-preset-env': { stage: 0 },
    'postcss-short': {},
    'cssnano': {}
  }
}
