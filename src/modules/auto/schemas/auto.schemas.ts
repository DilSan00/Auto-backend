import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Auto {
  @Prop({ required: true })
  mark: string;

  @Prop({ required: true })
  model: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  mileage: number;

  @Prop({ required: true })
  year: number;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  gearbox: string;

  @Prop({ required: true })
  engine: string;

  @Prop({ required: true })
  currency: string;

  @Prop({ required: true })
  ownerPhone: string;

  @Prop({ required: true })
  driveType: string;

  @Prop({ required: true })
  bodyType: string;
}
 
export type AutoDocument = Auto & Document;
export const AutoSchema = SchemaFactory.createForClass(Auto);
