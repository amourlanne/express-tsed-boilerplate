if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

module.exports = {
  name: "default",
  type: "mariadb",
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  synchronize: false,
  logging: false,
  entities: [
    "src/entity/**/*.ts"
  ],
  subscribers: [
    "src/subscriber/**/*.ts"
  ],
  migrations: [
    "src/migration/**/*.ts"
  ],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber"
  }
}
