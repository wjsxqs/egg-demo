import * as crypto from 'crypto';
import { Service } from 'egg';
import * as _ from 'loadsh';

export default class User extends Service {
  public async create(user: any): Promise<any> {
    const { ctx } = this;
    console.log('user', user);

    const { nickname, username, userrole, password } = user;

    const userInfo = {
      nickname,
      username,
      userrole,
    };

    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto
      .createHmac('sha256', salt)
      .update(password)
      .digest('hex');

    user.salt = salt;
    user.hash = hash;

    const result = await ctx.model.User.create(userInfo);
    console.log('result', result);

    return true;
  }

  public async login(username: string, password: string): Promise<any> {
    const { ctx } = this;

    const user: any = await ctx.model.User.findOne({
      where: {
        username,
      },
    });

    if (!user) {
      return false;
    }

    const hash = crypto
      .createHmac('sha256', user.salt)
      .update(password)
      .digest('hex');

    return hash === user.hash ? user : null;
  }

  public async getConfig() {
    const config: any = await this.ctx.model.Config.findAll();
    console.log('config', config);
  }

  public async register(payload: any) {
    console.log(payload);
  }

  public async fetchByUsername(username: string) {
    const { ctx } = this;
    console.log('username', username);
    const user: any = await ctx.model.User.findOne({
      where: {
        username,
      },
    });
    console.log('user', user);

    const result = _.pick(user, [
      'id', 'username', 'userrole', 'nickname',
    ]);

    return result;
  }
}
