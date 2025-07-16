import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Donacionesentity } from './entities/donacione.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DonacionesService {
  constructor(@InjectRepository(Donacionesentity)
  private donacionesentity: Repository<Donacionesentity>){}

  public async create(createDonacioneDto) {
    let resultado = await this.donacionesentity.create(createDonacioneDto);
    let res = await this.donacionesentity.save(resultado);
    return res;
  }

  public async getAll(){
    return await this.donacionesentity.find();
  }


}
