import * as path from 'path';

export const config: any = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'admin',
  database: 'frozenlogic_task',
  entities: [path.resolve(__dirname, '../models/*.js')],
  synchronize: true,
};
