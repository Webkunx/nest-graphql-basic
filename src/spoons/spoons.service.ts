import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Spoon } from './interface/spoon.interface';
import { CreateSpoonDto } from './dto/create-spoon.dto';

@Injectable()
export class SpoonsService {
  constructor(@InjectModel('Spoon') private spoonModel: Model<Spoon>) {}

  async createSpoon(createSpoonDto: CreateSpoonDto): Promise<Spoon> {
    const createdSpoon = new this.spoonModel(createSpoonDto);
    await createdSpoon.save();
    return createdSpoon;
  }

  async readAllSpoons(): Promise<Spoon[]> {
    return await this.spoonModel.find().exec();
  }
}
