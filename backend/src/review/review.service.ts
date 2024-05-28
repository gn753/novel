import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Review } from "../schemas/review.schema";
import { CreateReviewDto, UpdateReviewDto } from "src/schemas/review.dto";
import { User } from "src/schemas/user.schema";

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(Review.name) private reviewModel: Model<Review>,
    @InjectModel(User.name) private userModel: Model<User>
  ) {}

  async addReview(createReviewDto: CreateReviewDto): Promise<Review> {
    const userId = createReviewDto.userId;
    const user = await this.userModel.findOne({ userId }).exec();
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    // 새로운 Review 생성
    const createdReview = new this.reviewModel({ ...createReviewDto, userId });
    await createdReview.save();
    const { reviewId } = createdReview;
    // User 컬렉션에 Review 메타데이터 추가
    user.reviews.push({
      reviewId,
      novelId: createReviewDto.novelId,
      score: createReviewDto.score,
    });
    await user.save();

    return createdReview;
  }

  async findAll(): Promise<Review[]> {
    return this.reviewModel.find().exec();
  }

  async findOne(id: string): Promise<Review> {
    return this.reviewModel.findById(id).exec();
  }

  async update(id: string, updateReviewDto: UpdateReviewDto): Promise<Review> {
    return this.reviewModel
      .findByIdAndUpdate(id, updateReviewDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Review> {
    return this.reviewModel.findByIdAndDelete(id).exec();
  }
}
