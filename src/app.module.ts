import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuestsModule } from './modules/guest/guests.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_SQL_HOST || 'localhost',
      port: parseInt(process.env.DB_SQL_PORT, 10 || 5432),
      username: process.env.DB_SQL_USER || 'user',
      password: process.env.DB_SQL_PASS || 'pass',
      database: process.env.DB_SQL_DATABASE || 'test',
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
    GuestsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
