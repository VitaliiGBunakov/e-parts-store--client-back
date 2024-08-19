import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_MYSQL_HOST || 'localhost',
      port: parseInt(process.env.DB_MYSQL_PORT, 10 || 5432),
      username: process.env.DB_MYSQL_USER || 'user',
      password: process.env.DB_MYSQL_PASS || 'pass',
      database: process.env.DB_MYSQL_DATABASE || 'test',
      entities: [],
      // synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
