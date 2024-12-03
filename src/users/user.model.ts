import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  nome: string;

  @Prop()
  cidade: string;
  
  @Prop()
  imagem: string;
  
  @Prop()
  idade: number;

}

export const UserSchema = SchemaFactory.createForClass(User);
