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
  category: string[];

  @Prop()
  author: string[];

  @Prop({ default: now() })
  createdDt?: Date;

  @Prop()
  img?: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
