import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1589187429766_7093';

  // add your egg config in here
  config.middleware = [ 'graphql' ];

  config.security = {
    csrf: {
      ignoreJSON: true,
    },
  };

  config.security = {
    csrf: {
      ignore: () => true,
    },
  };

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  config.graphql = {
    router: '/graphql',
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
    // 是否加载开发者工具 graphiql, 默认开启。路由同 router 字段。使用浏览器打开该可见。
    graphiql: true,
    apolloServerOptions: {
      tracing: true, // 设置为true时，以Apollo跟踪格式收集和公开跟踪数据
      debug: true, // 一个布尔值，如果发生执行错误，它将打印其他调试日志记录
    },
  };

  config.jwt = {
    // algorithm: 'HS256',
    secret: 'JWT_SECRET',
  };

  // config.sequelize = {
  //   dialect: 'mysql',
  //   database: 'egg_demo',
  //   host: 'localhost',
  //   port: 3306,
  //   username: 'root',
  //   password: '123456',
  // };

  config.sequelize = {
    dialect: 'postgres',
    database: 'egg_demo',
    host: 'localhost',
    port: 5432,
    username: 'hasura',
    password: 'hasura',
  };

  // "development": {
  //   "username": "root",
  //   "password": "123456",
  //   "database": "egg_demo",
  //   "host": "127.0.0.1",
  //   "port": "3306",
  //   "dialect": "mysql",
  // },

  // "development": {
  //   "username": "hasura",
  //   "password": "hasura",
  //   "database": "egg_demo",
  //   "host": "127.0.0.1",
  //   "dialect": "postgres"
  // },


  // add your special config in here
  const bizConfig = {
    site: {
      register: true,
    },
  };

  return {
    ...config,
    ...bizConfig,
  };
};
