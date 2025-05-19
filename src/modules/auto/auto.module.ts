import { Module } from '@nestjs/common';
import { AutoService } from './auto.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Auto, AutoSchema } from './schemas/auto.schemas';
import { AutoController } from './auto.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Auto.name, schema: AutoSchema }]),
  ],
  controllers: [AutoController],
  providers: [AutoService],
})
export class AutoModule {}
