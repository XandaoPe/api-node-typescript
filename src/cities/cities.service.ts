import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cities } from './cities.model';
import { Query } from 'express-serve-static-core'
import { title } from 'process';

@Injectable()
export class CitiesService {
  constructor(@InjectModel(Cities.name) private citiesModel: Model<Cities>) {}

  async create(cities: Cities): Promise<Cities> {
    const createdCities = new this.citiesModel(cities);
    return createdCities.save();
  }

  async findAll(query: Query): Promise<Cities[]> {

    const resPerPage = Number(query.limit)
    const currentPage = Number(query.page) || 1
    const skip = resPerPage * (currentPage -1)

    const keywork = query.keywork ? {
      nome: {
        $regex: query.keywork,
        // $option: 'i'
      }
    } : {}
    return (await this.citiesModel.find({...keywork}).limit(resPerPage).skip(skip).exec());
  }

  async findOne(_id: string): Promise<Cities> {
    return this.citiesModel.findById(_id).exec();
  }

  async findImage(_id: string): Promise<Cities> {
    return this.citiesModel.findById(_id).exec();
  }

  async update(_id: string, cities: Cities): Promise<Cities> {
    return this.citiesModel.findByIdAndUpdate(_id, cities, { new: true }).exec();
  }

  async remove(_id: string): Promise<Cities> {
    return this.citiesModel.findByIdAndDelete(_id).exec();
  }
}
