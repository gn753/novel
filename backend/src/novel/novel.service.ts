import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateNovelDto } from "src/schemas/novel.dto";
import { Novel } from "src/schemas/novel.schema";
import { Review } from "src/schemas/review.schema";

@Injectable()
export class NovelService {
  constructor(
    @InjectModel(Novel.name) private novelModel: Model<Novel>,
    @InjectModel(Review.name) private reviewModel: Model<Review>
  ) {}

  async create(createNovelDto: CreateNovelDto): Promise<Novel> {
    const createdNovel = new this.novelModel(createNovelDto);
    return createdNovel.save();
  }

  async findAll(): Promise<Novel[]> {
    return this.novelModel.find().exec();
  }

  async findOne(id: string): Promise<Novel> {
    const novel = await this.novelModel.findById(id).exec();
    if (!novel) {
      return null;
    }
    // 평균 별점을 계산한다
    const averageRatingResult = await this.reviewModel
      .aggregate([
        { $match: { novelId: id } },
        { $group: { _id: null, averageRating: { $avg: "$score" } } },
      ])
      .exec();

    const averageRating = averageRatingResult.length
      ? averageRatingResult[0].averageRating
      : 0;
    novel.averageRating = averageRating;

    return novel.save();
  }

  async update(id: string, updateNovelDto: CreateNovelDto): Promise<Novel> {
    return this.novelModel
      .findByIdAndUpdate(id, updateNovelDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Novel> {
    return this.novelModel.findByIdAndDelete(id).exec();
  }
}
