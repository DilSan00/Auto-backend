import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Auto, AutoDocument } from './schemas/auto.schemas';
import { Model } from 'mongoose';
import { CreateAutoDto } from './dto/create-auto';

@Injectable()
export class AutoService {
  constructor(@InjectModel(Auto.name) private autoModel: Model<AutoDocument>) {}

  async findAll(): Promise<AutoDocument[]> {
    return this.autoModel.find().exec();
  }

  async findById(id: string): Promise<AutoDocument | null> {
    return this.autoModel.findById(id).exec();
  }

  async create(dto: CreateAutoDto): Promise<AutoDocument> {
    const createdAuto = new this.autoModel(dto);
    return createdAuto.save();
  }
}
