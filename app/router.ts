import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);

  router.post('/api/v1/user/register', controller.api.user.register);
  router.post('/api/v1/user/login', controller.api.user.login);

  router.get('/api/v1/user/config', controller.api.user.getConfig);
};
