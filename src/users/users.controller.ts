import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { User } from './user.model';
import { UsersService } from './users.service';
import { Query as ExpressQuery } from 'express-serve-static-core'
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() user: User): Promise<User> {
    console.log('payload controller...', user)
    return this.usersService.create(user);
  }

  @Get()
  findAll(@Query() query: ExpressQuery): Promise<User[]> {
    return this.usersService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Get('imagem/:id')
  findImage(@Param('id') id: string): Promise<User> {
    return this.usersService.findImage(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() user: User): Promise<User> {
    return this.usersService.update(id, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<User> {
    return this.usersService.remove(id);
  }
}
