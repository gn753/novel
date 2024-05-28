import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ReviewService } from "./review.service";
import { ReviewController } from "./review.controller";
import { Review, ReviewSchema } from "../schemas/review.schema";
import { UserModule } from "src/user/user.module";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Review.name, schema: ReviewSchema }]),
    UserModule,
  ],
  providers: [ReviewService],
  controllers: [ReviewController],
  exports: [ReviewService, MongooseModule],
})
export class ReviewModule {}
