import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Cities extends Document {
  @Prop()
  tipoDeCitie: string;

  @Prop()
  rua: string;
  
  @Prop()
  numero: string;
  
  @Prop()
  quadra: number;

  @Prop()
  lote: string
  
  @Prop()
  cep: string

  @Prop()
  obs: string

  @Prop()
  codCopasa: string

  @Prop()
  codCemig: string

  @Prop()
  status: string

}

export const CitiesSchema = SchemaFactory.createForClass(Cities);
