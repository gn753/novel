import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { now, Document } from "mongoose";
import * as bcrypt from "bcrypt";

@Schema({ id: true })
export class User extends Document {
  @Prop()
  userId: string;

  @Prop()
  password: string;

  @Prop({ default: now() })
  createdDt: Date;

  async comparePassword(plainPassword: string): Promise<boolean> {
    return await bcrypt.compare(plainPassword, this.password);
  }
}
export const UserSchema = SchemaFactory.createForClass(User);
