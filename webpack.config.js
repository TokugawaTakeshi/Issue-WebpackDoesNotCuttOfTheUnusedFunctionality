const Path = require('path');
const Webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');


module.exports = (env, argv) => {

  const isDevelopmentBuildMode = argv.mode === 'development';
  const isProductionBuildMode = argv.mode === 'production';
  const SOURCE_CODE_ROOT_ABSOLUTE_PATH =  Path.resolve(__dirname, 'src');

  /* --- 共通Webpack値 ----------------------------------------------------------------------------------------------- */
  const mode = isDevelopmentBuildMode ? 'development' : 'production';
  const context = __dirname + '/src';
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
  const resolve__extensions = ['.ts', '.js'];
  const webpackGlobals__DefilePlugin = new Webpack.DefinePlugin({
    IS_DEVELOPMENT_BUILD_MODE: isDevelopmentBuildMode,
    IS_PRODUCTION_BUILD_MODE: isProductionBuildMode,
    // 此処では絶対パス禁止！
    CONFIG_DIRECTORY_RELATIVE_PATH: JSON.stringify(Path.join('Source', 'Config'))
  });


  return [
    /* --- CLI + ProjectBuilder ------------------------------------------------------------------------------------- */
    {
      name: 'CLI parser',
      // target: 'node',

      context,
      entry: {
        'index': './index.ts',
      },

      output: {
        path: __dirname,
        filename: '[name].js',
        // libraryTarget: 'umd'
      },

      // node: {
      //   /**
      //    * 現在プロジェクトの絶対パスを返す、例えば「D:\OneDrive\PhpStorm\InHouseDevelopment\hikari-automation」
      //    * 利用プロジェクトの絶対パスを取得するには、process.cwd()を御利用。
      //    */
      //   __dirname: false
      // },
      // externals: [ nodeExternals() ],

      mode,
      watch,
      optimization,

      module: {
        rules: module__rules
      },

      resolve: {
        extensions: resolve__extensions,
        alias: {
          '@SourceFilesRoot': SOURCE_CODE_ROOT_ABSOLUTE_PATH
        }
      },

      plugins: [ webpackGlobals__DefilePlugin ]
    },
  ]
};
