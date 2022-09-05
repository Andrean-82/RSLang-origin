// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'RSLang/'),
        },
        port: 5500,
        devMiddleware: {
            publicPath: 'http://127.0.0.1:5500/RSLang/index.html',
        },
        hot: 'only',
    },
};
