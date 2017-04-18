const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
	entry: './app/js/script1.js',
	output: {
		filename: 'dist/bundle.js',
		library: 'bundle'
	},

	watch: NODE_ENV == 'development',
	watchOptions: {
		aggregateTimeout: 100
	},

	plugins: [
		new webpack.EnvironmentPlugin('NODE_ENV')
	]
};
