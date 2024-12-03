import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './users/user.model';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { DATABASE_URL } from 'env';
import { Cities, CitiesSchema } from './cities/cities.model';
import { CitiesController } from './cities/cities.controller';
import { CitiesService } from './cities/cities.service';

console.log(DATABASE_URL)

@Module({
  imports: [
    MongooseModule.forRoot(DATABASE_URL),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Cities.name, schema: CitiesSchema }]),
  ],
  controllers: [UsersController, CitiesController],
  providers: [UsersService, CitiesService],
})

export class AppModule {}