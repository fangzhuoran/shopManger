module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  // 装了组件，会有这个Element按需
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}
