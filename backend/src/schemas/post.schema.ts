import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, now } from "mongoose";

@Schema({ id: true })
export class Post extends Document {
  //문서의 속성을 정의하는 데코레이터

  @Prop()
  title: string;

  @Prop()
  content: string;

  @Prop()
  genre: string[];

  @Prop({ default: now() })
  createdDt: Date;

  @Prop({ default: now() })
  updatedAt: Date;

  @Prop()
  image?: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
PostSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});
