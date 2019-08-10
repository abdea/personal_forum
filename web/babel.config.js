module.exports = {
  presets: [
    '@vue/app'
  ],
  resolve: {
    alias: {
      view: path.resolve(__dirname, 'src/view/'),
      components: path.resolve(__dirname, 'src/components/')
    }
  }
}
