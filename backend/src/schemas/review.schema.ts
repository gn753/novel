import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ReviewDocument = Review & Document;

@Schema()
export class Review {
  @Prop({ required: true })
  novelId: string;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  rating: number;

  @Prop()
  comment: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
