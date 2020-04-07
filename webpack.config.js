const path = require('path');

var config = {
    entry: './src/main.ts',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(ts|js)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(css)$/,
                loader: 'file-loader',
                include: [
                    path.resolve(__dirname, 'src/style/'),
                    path.resolve(__dirname, 'node_modules'),
                ],
                options: {
                    name: 'style/[name].[ext]',
                }
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'file-loader',
                include: [
                    path.resolve(__dirname, 'src/gfx/'),
                ],
                options: {
                    name: 'gfx/[name].[ext]'
                }
            },
            {
                test: /\.(html)$/,
                loader: 'file-loader',
                options: {
                    name: 'html/[name].[ext]',
                },
                exclude: /index.html/
            },
            {
                test: /\.(html)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                },
                exclude: function() {
                    return /\.(html)$/ &&
                    !/index.html/;
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            'app': path.resolve(__dirname, 'src'),
            'gfx': path.resolve(__dirname, 'src/gfx/'),
        },
    },
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'dev'),
    }
};

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.mode = 'development';
        config.output.path = path.resolve(__dirname, 'dev');
    }

    if (argv.mode === 'production') {
        config.mode = 'production';
        config.output.path = path.resolve(__dirname, 'docs');
    }
    return config;
};
