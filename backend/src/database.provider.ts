import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { resolve } from 'path';

import 'dotenv/config';

@Injectable()
export class DatabaseConnectionProvider implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    console.log('process.env.HOST', process.env.POSTGRES_HOST);
    return {
      type: 'postgres',
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [resolve(__dirname, './**/*.entity.{ts,js}')],
      // migrations: [resolve(__dirname, './migrations/**/*.ts')],
      // cli: {
      //   migrationsDir: 'migrations',
      // },
      // subscribers: [
      //   resolve(__dirname, 'subscriber/**/*.ts'),
      //   resolve(__dirname, 'dist/subscriber/**/.js'),
      // ],

      // cli: {
      //   entitiesDir: 'src',
      //   migrationsDir: './migrations',
      //   subscribersDir: './subscriber',
      // },
      synchronize: true,
    };
  }
}
