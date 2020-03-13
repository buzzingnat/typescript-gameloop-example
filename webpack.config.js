const path = require('path');

module.exports = {
    entry: './src/script.ts',
    mode: 'development',
    module: {
        rules: [{
                test: /\.(ts|js)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            'app': path.resolve(__dirname, 'src')
        },
    },
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
