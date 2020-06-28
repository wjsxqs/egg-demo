import { Context } from 'egg';
// import * as Dataloader from 'dataloader';

export default class UserConnector {
  loader: any;
  ctx: Context;
  constructor(ctx: Context) {
    this.ctx = ctx;
    // this.loader = new Dataloader(this.fetch.bind(this));
  }

  async create(data: any) {
    const { ctx } = this;
    console.log('1111', data);
    return await ctx.service.user.create(data);
  }

  async register(data: any) {
    const { ctx } = this;
    return await ctx.service.user.register(data);
  }

  async login(username: string, password: string) {
    const { ctx } = this;
    return await ctx.service.user.login(username, password);
  }

  async fetchByUsername(username: string, password: string) {
    const { ctx } = this;
    console.log(password);
    return await ctx.service.user.fetchByUsername(username);
  }
}
