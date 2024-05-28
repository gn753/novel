import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import mongoosePlugin from "src/shared/mongoosePlugin";
import { v4 as uuidv4 } from "uuid";
export type ReviewDocument = Review & Document;

@Schema()
export class Review {
  @Prop({ required: true, default: uuidv4 })
  reviewId: string;

  @Prop({ required: true })
  novelId: string;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  score: number;

  @Prop()
  review?: string;

  @Prop({ default: Date.now })
  createdDt: Date;
}

const ReviewSchema = SchemaFactory.createForClass(Review);
ReviewSchema.plugin(mongoosePlugin);
export { ReviewSchema };
