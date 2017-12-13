var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'client/build');
var APP_DIR = path.resolve(__dirname, 'client/');

var config = {
    module: {
            loaders: [{
                        test: /\.jsx?$/,
                        include: APP_DIR,
                        loader: 'babel-loader',
                        query: {compact: false}
                /*            query:
                *                        {
                    *                                        presets:['es2015', 'react']
        *                                                    }
                *                                                    */
                    },
                    {
                                test: /\.css$/,
                                use: [
                                                'style-loader',
                                                {
                                                                    loader: 'css-loader',
                                                                    options: {
                                                                                            url: false
                                                                                        }
                                                                }
                                            ]
                            }],
        },
};

var topLevelFolderConfig = Object.assign({}, config, {
    entry: {
            App: APP_DIR + '/App.jsx',
            AppContainer: APP_DIR + '/AppContainer.jsx',
            index: APP_DIR + '/index.jsx',
            configureStore: APP_DIR + '/configureStore.jsx',
        },
    output: {
            path: BUILD_DIR,
            filename: '[name].js'
        }
});

module.exports = [
    topLevelFolderConfig,
];
