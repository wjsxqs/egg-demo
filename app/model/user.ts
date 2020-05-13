import { Application } from 'egg';

export default (app: Application) => {
  const { INTEGER, TEXT, DATE } = app.Sequelize;

  const User = app.model.define('users', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: TEXT,
    nickname: TEXT,
    userrole: TEXT,
    salt: TEXT,
    hash: TEXT,
    created_at: DATE,
    updated_at: DATE,
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'users',
  });

  return class extends User {};
  // return User;
};
