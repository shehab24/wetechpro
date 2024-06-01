const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const defaultConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = {
    ...defaultConfig,
    entry: {
        main: './src/index.js',
        admin: './src/admin.js',
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/[name].js', // Output JavaScript files in js folder
    },
  
    plugins: [
        ...defaultConfig.plugins, // Include default plugins
        new CleanWebpackPlugin(), // Cleans the output directory before each build
        
    ],
    resolve: {
        alias: {
            ...defaultConfig.resolve.alias,
            '@Utils': path.resolve(__dirname, 'src/utils/'),
        },
    },
};
