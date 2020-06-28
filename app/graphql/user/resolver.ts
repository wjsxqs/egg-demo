export default {
  Query: {
    async login(_root: any, { data }, { connector }) {
      const { username, password } = data;
      return await connector.user.login(username, password);
    },
    async fetchByUsername(_root: any, { data }, { connector }) {
      const { username, password } = data;
      return await connector.user.fetchByUsername(username, password);
    },
  },

  Mutation: {
    async create(_root: any, { data }, { connector }) {
      return await connector.user.create(data);
    },
    async register(_root: any, { data }, { connector }) {
      return await connector.user.register(data);
    },
  },
};
