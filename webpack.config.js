const path = require('path');

var config = {
    entry: './src/script.ts',
    mode: 'development',
    module: {
        rules: [{
                test: /\.(ts|js)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(css|html)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            'app': path.resolve(__dirname, 'src'),
        },
    },
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'dist'),
    },
};

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.mode = 'development';
        config.output.path = path.resolve(__dirname, 'dist');
    }

    if (argv.mode === 'production') {
        config.mode = 'production';
        config.output.path = path.resolve(__dirname, 'docs');
    }
    return config;
};
