import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1589187429766_7093';

  // add your egg config in here
  config.middleware = [];

  config.security = {
    csrf: {
      ignoreJSON: true,
    },
  };

  config.jwt = {
    // algorithm: 'HS256',
    secret: 'JWT_SECRET',
  };

  config.sequelize = {
    dialect: 'postgres',
    database: 'egg_demo',
    host: 'localhost',
    port: 5432,
    username: 'hasura',
    password: 'hasura',
  };

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
