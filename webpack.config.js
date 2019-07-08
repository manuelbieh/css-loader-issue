module.exports = {
    entry: './index.js',
    mode: 'production',
    module: {
        rules: [{
            test: /module.css$/,
            use: [{
                loader: require.resolve('css-loader'),
                options: {
                    localsConvention: 'camelCase',
                    modules: {
                        getLocalIdent: () => {
                            return Math.random().toString(36).substring(2)
                        },
                    }
                },
            }]
        }],
    },
}