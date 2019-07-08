const path = require('path');
const loaderUtils = require('loader-utils');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

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
                      getLocalIdent: getCSSModuleLocalIdent,
                    }
                },
            }]
        }],
    },
}