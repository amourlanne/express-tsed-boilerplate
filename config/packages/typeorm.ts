import {ConnectionOptions} from "typeorm";

import dotenv from 'dotenv'

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

export = <ConnectionOptions> {
  type: "mariadb",
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  synchronize: false,
  logging: false,
  entities: [
    "src/Entities/**/*.ts"
  ],
  migrations: [
    "src/Migrations/**/*.ts"
  ],
  subscribers: [
    "src/Subscribers/**/*Subscriber.ts"
  ],
  cli: {
    entitiesDir: "src/Entities",
    migrationsDir: "src/Migrations",
    subscribersDir: "src/Subscribers"
  }
}
