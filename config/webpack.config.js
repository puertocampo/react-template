const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './src/public/index.html',
  filename: './index.html'
});

module.exports = () => {
  return {
    mode: process.env.NODE_ENV,
    target: 'web',
    entry: './src/index.tsx',
    output: {
      path: path.resolve('dist'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    performance: {
      maxEntrypointSize: 500000,
      maxAssetSize: 500000
    },
    module: {
      rules: [
        // ビルド前にlintかける
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          enforce: 'pre',
          use: [
            {
              options: {
                formatter: require.resolve('react-dev-utils/eslintFormatter'),
                eslintPath: require.resolve('eslint'),
                resolvePluginsRelativeTo: __dirname,
                configFile: path.resolve(__dirname, '.eslintrc')
              },
              loader: require.resolve('eslint-loader')
            }
          ],
          include: path.resolve(__dirname, 'src')
        },
        {
          // 拡張子 .ts もしくは .tsx の場合
          test: /\.tsx?$/,
          // TypeScript をコンパイルする
          use: 'ts-loader'
        }
      ]
    },
    // import 文で .ts や .tsx ファイルを解決するため
    resolve: {
      modules: ['node_modules'],
      extensions: ['.ts', '.tsx', '.js', '.json']
    },
    plugins: [htmlWebpackPlugin],
    devtool: 'source-map',
    devServer: {
      open: true,
      port: 2000,
      historyApiFallback: true,
      publicPath: '/'
    }
  };
};
