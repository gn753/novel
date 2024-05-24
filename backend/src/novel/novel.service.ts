import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateNovelDto } from "src/schemas/novel.dto";
import { Novel } from "src/schemas/novel.schema";


@Injectable()
export class NovelService {
  constructor(@InjectModel(Novel.name) private postModel: Model<Novel>) {}

  async createPost(createNovelDto: CreateNovelDto) {
    const createdPost = new this.postModel(createNovelDto);
    return await createdPost.save();
  }

  async getPosts(): Promise<Novel[]> {
    return this.postModel.find().exec();
  }

  async getPostById(reviewId: string): Promise<Novel> {
    const review = await this.postModel.findById(reviewId).exec();
    return review;
  }

  async updatePost(id: string, updatePostDto: CreateNovelDto): Promise<Novel> {
    const updatedPost = await this.postModel
      .findByIdAndUpdate(id, updatePostDto, { new: true })
      .exec();

    return updatedPost;
  }

  async deletePost(id: string): Promise<boolean> {
    const result = await this.postModel.deleteOne({ _id: id }).exec();

    if (result) return true;
    else return false;
  }
}
