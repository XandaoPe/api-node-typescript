import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  nomeCompleto: string;

  @Prop()
  cidadeId: string;
  
  @Prop()
  email: string;

}

export const UserSchema = SchemaFactory.createForClass(User);
