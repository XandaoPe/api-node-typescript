import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { Cities } from './cities.model';
import { CitiesService } from './cities.service';
import { Query as ExpressQuery } from 'express-serve-static-core'

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Post()
  create(@Body() cities: Cities): Promise<Cities> {
    return this.citiesService.create(cities);
  }

  @Get()
  findAll(@Query() query: ExpressQuery): Promise<Cities[]> {
    return this.citiesService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Cities> {
    return this.citiesService.findOne(id);
  }

  @Get('imagem/:id')
  findImage(@Param('id') id: string): Promise<Cities> {
    return this.citiesService.findImage(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() cities: Cities): Promise<Cities> {
    return this.citiesService.update(id, cities);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Cities> {
    return this.citiesService.remove(id);
  }
}
