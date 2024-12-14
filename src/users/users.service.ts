import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';
import { Query } from 'express-serve-static-core'
@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(user: User): Promise<User> {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  async findAll(query: Query): Promise<User[]> {

    const resPerPage = Number(query.limit)
    const currentPage = Number(query.page) || 1
    const skip = resPerPage * (currentPage - 1)

    const keywork = query.keywork ? {
      nomeCompleto: {
        $regex: query.keywork,
        // $option: 'i'
      }
    } : {}
    return (await this.userModel.find({ ...keywork }).limit(resPerPage).skip(skip).exec());
  }

  // async findAll(): Promise<User[]> {
  //   return this.userModel.find().exec();
  // }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async findImage(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async update(id: string, user: User): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, user, { new: true }).exec();
  }

  async remove(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
