const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'development',
	devServer: {
	contentBase: path.resolve(__dirname,'app'),
	port: 8000,
	host: '0.0.0.0',
	useLocalIp: true
	},	
	devtool: 'source-map',
	entry: {
		libs: ['jquery'],
		layout: [
			path.resolve(__dirname, 'src/entry/layout.js')
		],
		index: path.resolve(__dirname, 'src/entry/index.js'), 		// page1 引入customCss customJs
		about: path.resolve(__dirname, 'src/entry/about.js'),		// page2 引入customCss customJs
		play: path.resolve(__dirname, 'src/entry/play.js'),		 	// page3 引入customCss customJs
		history: path.resolve(__dirname, 'src/entry/history.js'),	// page4 引入customCss customJs
	},
	output: {
		path: path.resolve(__dirname, 'app'),
		filename: 'src/[name]bundle.js',
		chunkFilename: 'src/[name]bundle.js'
	},
	plugins: [
	new webpack.HotModuleReplacementPlugin(),
	new HtmlWebpackPlugin({ // page1 Index
		template: 'src/index.html',  // 模板文檔路徑
		filename: 'index.html',  		// 文檔寫入路徑
		chunks: ['layout','index','libs'],
		chunksSortMode: 'manual',
		inject: true, // js插入位置 ture body最後
		minify: {
			removeAttributeQuotes: false,
			collapseWhitespace: false,
			html5: false,
			minifyCSS: false,
			minifyJS: false,
			minifyURLs: false,
			removeComments: false,
			removeEmptyAttributes: false
		},
		hash: false,
		}),
	new HtmlWebpackPlugin({ // page2 about
		template:  path.resolve(__dirname, 'src/about.html'),
		filename: 'about.html',
		chunks: ['layout','about','libs'],
		chunksSortMode: 'manual',
		inject: true,
		minify: {
			removeAttributeQuotes: false,
			collapseWhitespace: false,
			html5: false,
			minifyCSS: false,
			minifyJS: false,
			minifyURLs: false,
			removeComments: false,
			removeEmptyAttributes: false
		},  
		hash: false,
		}),	  
	new MiniCssExtractPlugin({
			filename: "css/[name].css", 
			chunkFilename: path.resolve(__dirname, './scss/[name].scss')
		}),
	new CopyWebpackPlugin([
	    {from:'src/image',to:'./image'}
	]), 	
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['env']
						}
					}
				]
			},
			{
				test: /\.s?[ac]ss$/,
				use: [ 
				MiniCssExtractPlugin.loader,
				'css-loader',
				{
					loader: 'postcss-loader',
					options: { plugins: [require('autoprefixer')({ browsers: ['last 2 versions'] })] },
				},
				'sass-loader'
				],
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/,
      	use: [
        {
          loader: 'url-loader',
			    options: {
			      'limit': 40000,
			      'name': 'image/[hash:12].[ext]'
			     }
        },
				'image-webpack-loader'
      ]	
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	}
};
