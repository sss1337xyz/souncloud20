module.exports = {
    webpack: {
        configure: (webpackConfig, { env }) => {
            if (env === 'development') {
                // Добавьте опцию devtool для создания source maps и кликабельной трассировки стека
                webpackConfig.devtool = 'inline-source-map';
                // Добавьте следующие опции для создания кликабельной трассировки стека в коде VS
                webpackConfig.output.devtoolModuleFilenameTemplate = info =>
                    `../${info.resourcePath}`;
                webpackConfig.output.devtoolFallbackModuleFilenameTemplate =
                    '[absolute-resource-path]';
            }
            return webpackConfig;
        },
    },

    babel: {
        plugins: [
            "babel-plugin-styled-components",
        ],
    },

    devServer: (devServerConfig) => {
        /* ... */
        devServerConfig.proxy = {
            '/api': 'http://localhost:8788'
        }
        devServerConfig.port = 3000;
        return devServerConfig;
    },
};