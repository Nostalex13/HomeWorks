const NODE_ENV = process.env.NODE_ENV || 'dev';
const webpack = require('webpack');

module.exports = {
	entry: './app/js/script1.js',
	output: {
		filename: 'dist/bundle.js',
		library: 'bundle'
	},

	watch: NODE_ENV == 'dev',
	watchOptions: {
		aggregateTimeout: 100
	},

	plugins: [
		new webpack.EnvironmentPlugin('NODE_ENV')
	],

	module: [{
		test: /.app\js\.js$/,
		loader: 'babel'
	}]
};
