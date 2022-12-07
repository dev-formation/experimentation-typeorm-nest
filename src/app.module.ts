import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Hero } from './hero/entities/hero.entity';
import { HeroModule } from './hero/hero.module';
import { Tournament } from './tournament/entities/tournament.entity';
import { TournamentModule } from './tournament/tournament.module';
import { TypeWeapon } from './type-weapon/entities/type-weapon.entity';
import { TypeWeaponModule } from './type-weapon/type-weapon.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Hero, Tournament, TypeWeapon],
      synchronize: true,
    }),
    HeroModule,
    TournamentModule,
    TypeWeaponModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
