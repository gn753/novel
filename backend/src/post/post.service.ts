import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreatePostDto } from "src/schemas/post.dto";
import { Post } from "src/schemas/post.schema";

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async createPost(createReviewDto: CreatePostDto) {
    const createdPost = new this.postModel(createReviewDto);
    return await createdPost.save();
  }

  async getPosts(): Promise<Post[]> {
    return this.postModel.find().exec();
  }

  async getPostById(reviewId: string): Promise<Post> {
    const review = await this.postModel.findById(reviewId).exec();
    return review;
  }

  async updatePost(id: string, updatePostDto: CreatePostDto): Promise<Post> {
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
