const Obfuscator = require('webpack-obfuscator');
const Compression = require('compression-webpack-plugin');

const dev = {
  plugins: [
    new Compression({
      cache: true,
      test: /\.(html|js|css|svg)/i,
    }),
    new Obfuscator({
      disableConsoleOutput: true,
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      automaticNameDelimiter: '-',
    },
  },
  output: {
    chunkFilename: 'js/[name].js',
    filename: 'js/[name].js',
  },
  devtool: '(none)',
};

module.exports = {
  configureWebpack: process.env.NODE_ENV === 'production' ? dev : {
    devServer: {
      hot: true,
    },
  },
  pluginOptions: {
    i18n: {
      locale: 'fr',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
  transpileDependencies: [
    'vuetify',
  ],
  productionSourceMap: false,
};
