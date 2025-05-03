// module.exports = {
//   chainWebpack: config => {
//     // Удаляем стандартную обработку SVG, чтобы не конфликтовать
//     const svgRule = config.module.rule('svg');
//     svgRule.uses.clear();

//     svgRule
//       .use('vue-svg-loader')
//       .loader('vue-svg-loader');
//   }
// }

module.exports = {
  chainWebpack: config => {
    // Правило для обработки SVG
    config.module
      .rule('svg')
      .test(/\.svg$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'img/[name].[hash:8].[ext]'
      });
  }
}