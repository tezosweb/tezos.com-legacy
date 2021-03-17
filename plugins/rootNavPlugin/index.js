const path = require('path')

module.exports = function(context, options) {
    return {
        name: 'root-nav-plugin',
        configureWebpack(config, isServer, utils) {
            return {
                resolve: {
                    alias: {
                        components: path.resolve(__dirname, '/src/components/'),
                        context: path.resolve(__dirname, '/src/context/'),
                        data: path.resolve(__dirname, '/src/data/'),
                        docs: path.resolve(__dirname, '/docs/'),
                        img: path.resolve(__dirname, '/static/img/'),
                        pages: path.resolve(__dirname, '/src/pages/'),
                        src: path.resolve(__dirname, '/src/'),
                        utils: path.resolve(__dirname, '/src/utils/')
                    },
                    extensions: ['.js', '.md', '.mdx']
                }
            }
        }
    }
}