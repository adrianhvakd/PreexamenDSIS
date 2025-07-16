import { Test, TestingModule } from '@nestjs/testing';
import { DonacionesController } from './donaciones.controller';
import { DonacionesService } from './donaciones.service';

describe('DonacionesController', () => {
  let controller: DonacionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DonacionesController],
      providers: [DonacionesService],
    }).compile();

    controller = module.get<DonacionesController>(DonacionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
