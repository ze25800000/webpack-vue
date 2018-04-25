/**
 * 后处理css，当styl编译完成后，再通过autoprefixer优化代码
 * 有些浏览器css 样式需要添加不同的内核信息，使用autoprefixer自动完成添加前缀
 */
const autoprefixer = require('autoprefixer')
module.exports = {
    plugins: [
        autoprefixer()
    ]
}