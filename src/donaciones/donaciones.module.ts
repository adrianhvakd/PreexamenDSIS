import { Module } from '@nestjs/common';
import { DonacionesService } from './donaciones.service';
import { DonacionesController } from './donaciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Donacionesentity } from './entities/donacione.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Donacionesentity])],
  controllers: [DonacionesController],
  providers: [DonacionesService],
})
export class DonacionesModule {}
