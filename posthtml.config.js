const root = 'src/html'

module.exports = {
  input: ['src/html/**/*.html', '!src/html/inc/**/*'],
  output: 'public',
  plugins: {
    'posthtml-extend': { root },
    'posthtml-include': { root },
    'posthtml-expressions': {},
    'posthtml-beautify': {}
  }
}
