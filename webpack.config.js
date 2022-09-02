// /* eslint-disable @typescript-eslint/no-var-requires */
// const path = require('path');
// const { merge } = require('webpack-merge');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const EslingPlugin = require('eslint-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const miniCss = require('mini-css-extract-plugin');

// const baseConfig = {
//     entry: path.resolve(__dirname, './src/index'),
//     mode: 'development',
//     module: {
//         rules: [
//             {
//                 test: /\.css$/i,
//                 use: [
//                     {
//                         loader: miniCss.loader,
//                     },
//                     'css-loader',
//                 ],
//             },
//             {
//                 test: /\.s[ac]ss$/i,
//                 use: [
//                     {
//                         loader: miniCss.loader,
//                     },
//                     'css-loader',
//                     'sass-loader',
//                 ],
//             },
//             {
//                 test: /\.ts$/i,
//                 use: 'ts-loader',
//             },
//             {
//                 test: /\.(png|jpg|gif)$/,
//                 use: [
//                     {
//                         loader: 'url-loader',
//                         options: {
//                             limit: 8192,
//                         },
//                     },
//                 ],
//             },
//         ],
//     },
//     resolve: {
//         extensions: ['.ts', '.js'],
//     },
//     output: {
//         filename: 'index.js',
//         path: path.resolve(__dirname, './RSLang'),
//         assetModuleFilename: 'assets/[hash][ext][query]',
//         clean: true,
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: path.resolve(__dirname, './src/index.html'),
//             filename: 'index.html',
//         }),
//         new CleanWebpackPlugin(),
//         new EslingPlugin({ extensions: 'ts' }),
//         new CopyWebpackPlugin({ patterns: [{ from: './src/assets', to: 'assets' }] }),
//         new miniCss({
//             filename: 'style.css',
//         }),
//     ],
// };

// module.exports = ({ mode }) => {
//     const isProductionMode = mode === 'prod';
//     const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

//     return merge(baseConfig, envConfig);
// };
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const EslingPlugin = require('eslint-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const CopyWebpackPlugin = require('copy-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
    mode,
    target,
    devtool,
    devServer: {
        port: 5000,
        open: true,
        hot: true,
    },
    experiments: {
        topLevelAwait: true,
    },
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
        path: path.resolve(__dirname, 'RSLang'),
        clean: true,
        filename: 'index.[contenthash].js',
        //assetModuleFilename: 'assets/images/[name][ext]',
        assetModuleFilename: (pathData) => {
            const filepath = path.dirname(pathData.filename).split('/').slice(1).join('/');
            return `${filepath}/[name][ext][query]`;
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new EslingPlugin({
            extensions: 'ts',
        }),
        new CopyWebpackPlugin({ patterns: [{ from: './src/assets', to: 'assets' }] }),
    ],
    module: {
        rules: [
            {
                test: /\.ts$/i,
                use: 'ts-loader',
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [require('postcss-preset-env')],
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(ttf|otf|eot|woff2?|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]',
                },
            },
            {
                test: /\.(gif|png|jpeg|jpg|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][ext]',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
};
