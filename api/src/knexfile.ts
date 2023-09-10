import path from 'path';

module.exports = {
  client: 'mysql',
  useNullAsDefault: true,
  migrations: {
    directory: path.join(__dirname, '/migrations'),
  },
  connection: {
    host: 'typescript_database',
    port: '3306',
    user: 'root',
    password: 'toor',
    database: 'book',
  },
};
