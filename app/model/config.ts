import { Application } from 'egg';

export default (app: Application) => {
  const { INTEGER, STRING, DATE, TEXT } = app.Sequelize;

  const Config = app.model.define('configs', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    key: {
      type: STRING,
      allowNull: false,
      defaultValue: '',
      unique: true,
    },
    value: { type: TEXT, allowNull: false, defaultValue: '' },
    remark: { type: STRING, allowNull: false, defaultValue: '' },
    created_at: DATE,
    updated_at: DATE,
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'configs',
  });

  return class extends Config {};
  // return Config;
};
