// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportConfig from '../../../app/model/config';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Config: ReturnType<typeof ExportConfig>;
    User: ReturnType<typeof ExportUser>;
  }
}
