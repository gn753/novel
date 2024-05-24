import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, now } from "mongoose";
import { v4 as uuidv4 } from "uuid";
@Schema()
export class Novel extends Document {
  //문서의 속성을 정의하는 데코레이터
  @Prop({ type: String, default: uuidv4 })
  id: string;

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

export const NovelSchema = SchemaFactory.createForClass(Novel);
