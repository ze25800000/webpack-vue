module.exports = (isDev) => {
    return {
        preserveWhitepace: true,
        extractCss: !isDev,
        cssModules: {},
    }
}