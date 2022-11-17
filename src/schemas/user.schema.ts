import { Schema, SchemaFactory, Prop} from "@nestjs/mongoose";
import { Document} from 'mongoose';
  
export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({
    required: true,
    minlength: 2,
    maxlength: 35
  })
  name: string;

  @Prop({
    required: true,
    minlength: 2,
    maxlength: 35
  })
  surname: string;

  @Prop({
    required: true,
    maxlength: 60
  })
  email: string;

  @Prop({
    required: true,
    minlength: 8
  })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);