import {
  Body,
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
  Res,
  Delete,
} from "@nestjs/common";
import { PostService } from "src/post/post.service";
import { CreatePostDto } from "src/schemas/post.dto";
import { Post as IPost } from "src/schemas/post.schema";

@Controller("post")
export class PostController {
  constructor(private postService: PostService) {}

  @Post("/create")
  async createPost(
    @Body() createPostDto: CreatePostDto,
    @Res() res
  ): Promise<IPost> {
    try {
      const createdReview = await this.postService.createPost(createPostDto);
      return res.status(HttpStatus.CREATED).json(createdReview);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Failed to create review." });
    }
  }

  @Get("/list")
  async getPosts(): Promise<IPost[]> {
    return await this.postService.getPosts();
  }

  @Get("/:id")
  async getPostbyId(@Param("id") id: string): Promise<IPost> {
    const review = await this.postService.getPostById(id);
    if (!review) {
      throw new NotFoundException("Review not found");
    }
    return review;
  }

  @Put(":id")
  async updateReview(
    @Param("id") id: string,
    @Body() updatePostDto: CreatePostDto
  ): Promise<IPost> {
    const updatedReview = await this.postService.updatePost(id, updatePostDto);
    if (!updatedReview) {
      throw new NotFoundException("Review not found");
    }
    return updatedReview;
  }

  @Delete(":id")
  async deletePost(@Param("id") id: string): Promise<void> {
    const result = await this.postService.deletePost(id);
    if (!result) {
      throw new NotFoundException("Review not found");
    }
  }
}
