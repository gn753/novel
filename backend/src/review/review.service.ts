import { Injectable, BadRequestException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Review, ReviewDocument } from "../schemas/review.schema";
import { CreateRatingDto } from "src/schemas/review.dto";
import { CreateCommentDto } from "src/schemas/review.dto";

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(Review.name) private reviewModel: Model<ReviewDocument>
  ) {}

  async createOrUpdateRating(
    createRatingDto: CreateRatingDto
  ): Promise<Review> {
    const { novelId, userId, rating } = createRatingDto;
    const existingReview = await this.reviewModel.findOne({ novelId, userId });

    if (existingReview) {
      existingReview.rating = rating;
      return existingReview.save();
    } else {
      const createdReview = new this.reviewModel({ novelId, userId, rating });
      return createdReview.save();
    }
  }

  async addComment(createCommentDto: CreateCommentDto): Promise<Review> {
    const { novelId, userId, comment } = createCommentDto;
    const existingReview = await this.reviewModel.findOne({ novelId, userId });

    if (!existingReview || !existingReview.rating) {
      throw new BadRequestException(
        "You need to rate the novel before commenting."
      );
    }

    existingReview.comment = comment;
    return existingReview.save();
  }

  async findByNovelIdAndUserId(
    novelId: string,
    userId: string
  ): Promise<Review> {
    console.log("실행확인");
    return this.reviewModel.findOne({ novelId, userId }).exec();
  }

  async findByNovelIdExcludingUser(
    novelId: string,
    userId: string,
    page: number,
    limit: number
  ): Promise<Review[]> {
    const skip = (page - 1) * limit;
    return this.reviewModel
      .find({ novelId, userId: { $ne: userId } })
      .skip(skip)
      .limit(limit)
      .exec();
  }

  async countByNovelIdExcludingUser(
    novelId: string,
    userId: string
  ): Promise<number> {
    return this.reviewModel
      .countDocuments({ novelId, userId: { $ne: userId } })
      .exec();
  }
}
