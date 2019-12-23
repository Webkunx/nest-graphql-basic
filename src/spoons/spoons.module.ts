import { Module } from '@nestjs/common';
import { SpoonsResolver } from './spoons.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { SpoonSchema } from './spoon.schema';
import { SpoonsService } from './spoons.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Spoon', schema: SpoonSchema }]),
  ],
  providers: [SpoonsResolver, SpoonsService],
  exports: [SpoonsResolver],
})
export class SpoonsModule {}
