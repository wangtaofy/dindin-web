var os = require('os'); os.tmpDir = os.tmpdir;
// 引入hapi
const Hapi = require('hapi');

// 引入插件
const DinDinApi = require('dindin-api');
const Inert = require('inert');
const Vision = require('vision');

// 引入路由
const routes = require('./routes');

const Server = new Hapi.Server();
Server.connection({port: 4000, host: 'localhost'});

const init = async () => {
  await Server.register([
    DinDinApi,
    Inert,
    Vision
  ]);

  Server.bind({
    apiBaseUrl: 'http://localhost:4000/api',
    webBaseUrl: 'http://localhost:4000'
  });

  // 配置视图渲染
  Server.views({
    engines: {
      hbs: require('handlebars')
    },
    relativeTo: __dirname,
    path: './views',
    layoutPath: './views/layout',
    layout: true,
    isCached: false,
    partialsPath: './views/partials',
    helpersPath: './views/helpers'
  });

  Server.route([
    ...routes
  ]);

  await Server.start();
  console.log('Started server at', Server.info.uri);
};

init();