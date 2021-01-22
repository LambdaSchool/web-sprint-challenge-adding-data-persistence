// do not make changes to this file (except to optionally add seeds)
const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: { directory: './data/migrations' },
  seeds: { directory: './data/seeds' },
  pool: { afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done) },
}

module.exports = {
  development: {
    ...sharedConfig,
    connection: { filename: './data/tables.db3' },
  },
  testing: {
    ...sharedConfig,
    connection: { filename: './data/tables.db3' },
  },
};
