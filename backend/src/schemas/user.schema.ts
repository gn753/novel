import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { now, Document } from "mongoose";
import * as bcrypt from "bcrypt";
import mongoosePlugin from "src/shared/mongoosePlugin";

@Schema()
export class ReviewMeta {
  @Prop({ required: true })
  reviewId: string;

  @Prop({ required: true })
  novelId: string;

  @Prop({ required: true })
  score: number;

  @Prop({ default: now() })
  createdDt?: Date;
}

@Schema({ id: true })
export class User extends Document {
  @Prop()
  userId: string;

  @Prop()
  password: string;

  @Prop({ default: now() })
  createdDt: Date;

  @Prop({ default: false })
  isAdmin: boolean;

  async comparePassword(plainPassword: string): Promise<boolean> {
    return await bcrypt.compare(plainPassword, this.password);
  }

  @Prop({ type: [ReviewMeta], default: [] })
  reviews: ReviewMeta[];
}
const UserSchema = SchemaFactory.createForClass(User);
UserSchema.plugin(mongoosePlugin);
export { UserSchema };
