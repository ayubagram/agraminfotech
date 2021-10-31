module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    name: 'Agram Infotech',
    // themeColor: '#2d3748',
    // msTileColor: '#2d3748',
    appleMobileWebAppCapable: 'no',
    appleMobileWebAppStatusBarStyle: 'default',
    manifestPath: 'manifest.json',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'service-worker.js',
      exclude: ['_redirects'],
    }
  },
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Agram Infotech - You Dream We Make IT Happen'
    }
  }
}
