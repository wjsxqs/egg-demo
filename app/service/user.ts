import * as crypto from 'crypto';
import { Service } from 'egg';

export default class User extends Service {
  public async create(user, password = ''): Promise<any> {
    const { ctx } = this;
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto
      .createHmac('sha256', salt)
      .update(password)
      .digest('hex');

    user.salt = salt;
    user.hash = hash;

    return await ctx.model.User.create(user);
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
}
