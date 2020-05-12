import { Application } from 'egg';

export default (app: Application) => {
  const { INTEGER, STRING, DATE, JSONB } = app.Sequelize;

  const Config = app.model.define('config', {
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
    value: { type: JSONB, allowNull: false, defaultValue: '' },
    remark: { type: STRING, allowNull: false, defaultValue: '' },
    created_at: DATE,
    updated_at: DATE,
  }, {
    timestamps: false,
    freezeTableName: true,
  });

  // return class extends Config {};
  return Config;
};
