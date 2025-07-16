import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DonacionesModule } from './donaciones/donaciones.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Donacionesentity } from './donaciones/entities/donacione.entity';

@Module({
  imports: [DonacionesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'donar',
      entities: [Donacionesentity],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
