const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './frontend/src/scripts/main.ts',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './frontend/src/assets/favicon.svg',
      template: './frontend/src/template.html',
    }),
  ],
  module: {
		rules: [
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
			{ test: /\.s[ac]ss$/i, use: [ "style-loader", "css-loader", "sass-loader" ] },
			{ test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource', },
		],
	},
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: false,
  },
  optimization: {
    runtimeChunk: 'single',
    moduleIds: 'deterministic',
    splitChunks: { chunks: 'all' },
  },
};