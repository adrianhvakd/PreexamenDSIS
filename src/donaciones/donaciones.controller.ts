import { Controller, Get, Post, Body, Patch, Param, Delete, Render, Res } from '@nestjs/common';
import { DonacionesService } from './donaciones.service';
import { Response } from 'express';


@Controller('donaciones')
export class DonacionesController {
  constructor(private readonly donacionesService: DonacionesService) {}
  @Get('')
  @Render('donaciones/index')
  async index(){
    let resultado = await this.donacionesService.getAll();
    return {resultado:resultado}
  }

  @Get('/formdonacion')
  @Render('donaciones/form')
  form(){}

  @Post('')
  async create(@Body() donacion,@Res() res:Response){
    let resultado = await this.donacionesService.create(donacion);
    if(resultado)
      return res.redirect('/donaciones')
  }
}
