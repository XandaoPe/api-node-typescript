import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cities } from './cities.model';

@Injectable()
export class CitiesService {
  constructor(@InjectModel(Cities.name) private citiesModel: Model<Cities>) {}

  async create(cities: Cities): Promise<Cities> {
    console.log('payload service...', cities)
    const createdCities = new this.citiesModel(cities);
    console.log('createdCities service...', createdCities)
    return createdCities.save();
  }

  async findAll(): Promise<Cities[]> {
    return this.citiesModel.find().exec();
  }

  async findOne(id: string): Promise<Cities> {
    return this.citiesModel.findById(id).exec();
  }

  async findImage(id: string): Promise<Cities> {
    return this.citiesModel.findById(id).exec();
  }

  async update(id: string, cities: Cities): Promise<Cities> {
    return this.citiesModel.findByIdAndUpdate(id, cities, { new: true }).exec();
  }

  async remove(id: string): Promise<Cities> {
    return this.citiesModel.findByIdAndDelete(id).exec();
  }
}
