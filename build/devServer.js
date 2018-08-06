const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

require('./webpack.dev.conf').then(webpackConfig => {
    const compiler = Webpack(webpackConfig);

    const devServerOptions = Object.assign({}, webpackConfig.devServer, {
      stats: {
        colors: true
      }
    });

    const server = new WebpackDevServer(compiler, devServerOptions);

    server.listen(8080, '0.0.0.0', () => {
      console.log('Starting server on http://localhost:8080');
    });
});
