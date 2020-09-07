import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as fs from 'fs';
/**
 * TypeORM DB config
 */
const dbconfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.APP_PG_URL,
  port: Number(process.env.APP_PG_PORT),
  username: process.env.APP_PG_USER,
  password: process.env.APP_PG_PW,
  database: process.env.APP_PG_DB,
  logging: false,
  // entities: ['dist/**/*.entity.js'],
  synchronize: true,
  autoLoadEntities: true,
  dropSchema: false,
  ssl: {
    rejectUnauthorized: false,
    ca: fs.readFileSync('postgres.crt'),
  },
};

/**
 * Make config for typeorm
 */
@Injectable()
export class DatabaseConfigFactory implements TypeOrmOptionsFactory {
  // constructor(private configService: ConfigService) {}
  createTypeOrmOptions(): TypeOrmModuleOptions {
    // return this.configService.get('database');
    return dbconfig;
  }
}
