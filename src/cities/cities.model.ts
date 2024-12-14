import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Cities extends Document {
  @Prop()
  nome: string;

}

export const CitiesSchema = SchemaFactory.createForClass(Cities);
