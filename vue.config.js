module.exports = {
    assetsDir: '',
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'examples/index.html',
            filename: 'index.html',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
    },
    configureWebpack: {
        resolve: {}
    },
    devServer: {
        disableHostCheck: true
    }
};
