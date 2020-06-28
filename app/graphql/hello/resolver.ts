export default {
  Query: {
    hellos(_root: any, {}, { connector }) {
      console.log('12333333');
      return connector.hello.hellos();
    },
  },
};
