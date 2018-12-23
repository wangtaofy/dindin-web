const Pages = require('./handlers/pages');
const Assets = require('./handlers/assets');

module.exports = [
  // 为资源目录提供静态服务
  {
    method: 'GET',
    path: '/{param*}',
    handler: Assets.servePublicDirectory
  },
  // 首页
  {
    method: 'GET',
    path: '/',
    handler: Pages.home
  },
  // 食谱详情页
  {
    method: 'GET',
    path: '/recipes/{id}',
    handler: Pages.recipesDetail
  }
];