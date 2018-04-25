const path = require('path')

const isDev = process.env.NODE_ENV === 'development' //判断是否是开发环境

const config = {
    target: 'web', //开发目标是web平台
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.(gif|png|jpg|svg|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: '[name]-aaa.[ext]'
                        }
                    }
                ]
            },
        ]
    }
}

if (isDev) {
    config.devServer = {
        port: 8000,
        host: '0.0.0.0',
        overlay: {
            errors: true
        }
    }
}
module.exports = config