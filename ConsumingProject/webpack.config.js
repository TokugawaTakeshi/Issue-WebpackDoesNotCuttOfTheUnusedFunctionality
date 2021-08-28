const Path = require('path');
const Webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');


module.exports = (env, argv) => {

  const isDevelopmentBuildMode = argv.mode === 'development';
  const isProductionBuildMode = argv.mode === 'production';

  const entry = { 'index': './index.ts' };

  const mode = isDevelopmentBuildMode ? 'development' : 'production';
  const module__rules = [
    {
      test: /\.ts$/,
      use: 'ts-loader'
    }
  ];
  const optimization = {
    emitOnErrors: true,
    minimize: isProductionBuildMode
  };
  const watch = isDevelopmentBuildMode;
  const webpackGlobals__DefilePlugin = new Webpack.DefinePlugin({
    IS_DEVELOPMENT_BUILD_MODE: isDevelopmentBuildMode,
    IS_PRODUCTION_BUILD_MODE: isProductionBuildMode
  });

  const module = { rules: module__rules };
  const plugins = [ webpackGlobals__DefilePlugin ];


  return [
    /* --- BrowserJS ----- */
    {
      name: 'BrowserJS',

      entry,

      output: {
        path: __dirname,
        filename: 'BrowserJS.js'
      },

      mode,
      watch,
      optimization,

      module,
      plugins
    },
    /* --- NodeJS ----- */
    {
      name: 'NodeJS',
      target: 'node',

      entry,

      output: {
        path: __dirname,
        filename: 'NodeJS.js'
      },

      node: { __dirname: false },
      externals: [ nodeExternals() ],

      mode,
      watch,
      optimization,

      module,
      plugins
    },
  ]
};
