const Pages = require('./handlers/pages');
const Assets = require('./handlers/assets');
const Actions = require('./handlers/actions');

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
  },
  // 登录页
  {
    method: 'GET',
    path: '/login',
    handler: Pages.login
  },
  // 登录表单提交
  {
    method: 'POST',
    path: '/login',
    handler: Actions.login
  },
  // 创建食谱页
  {
    method: 'GET',
    path: '/create',
    handler: Pages.createRecipe,
    config: {
      auth: {
        mode: 'required'
      }
    }
  },
  // 创建食谱表单提交
  {
    method: 'POST',
    path: '/create',
    handler: Actions.createRecipe,
    config: {
      auth: {
        mode: 'required'
      }
    }
  },
];