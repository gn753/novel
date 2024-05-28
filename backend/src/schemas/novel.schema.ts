import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, now } from "mongoose";
import mongoosePlugin from "src/shared/mongoosePlugin";
import { v4 as uuidv4 } from "uuid";

@Schema()
export class Novel extends Document {
  //문서의 속성을 정의하는 데코레이터
  @Prop({ required: true, default: uuidv4 })
  novelId: string;

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

  @Prop({ default: 0 })
  averageRating: number;

  @Prop()
  img?: string;
}

const NovelSchema = SchemaFactory.createForClass(Novel);
NovelSchema.plugin(mongoosePlugin);
export { NovelSchema };
