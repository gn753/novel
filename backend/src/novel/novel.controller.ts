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
import { NovelService } from "src/novel/novel.service";

import { CreateNovelDto } from "src/schemas/novel.dto";
import { Novel } from "src/schemas/novel.schema";

@Controller("post")
export class NovelController {
  constructor(private novelService: NovelService) {}

  @Post("/create")
  async createPost(
    @Body() createNovelDto: CreateNovelDto,
    @Res() res
  ): Promise<Novel> {
    try {
      const createdReview = await this.novelService.createPost(createNovelDto);
      return res.status(HttpStatus.CREATED).json(createdReview);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Failed to create review." });
    }
  }

  @Get("/list")
  async getPosts(): Promise<Novel[]> {
    return await this.novelService.getPosts();
  }

  @Get("/:id")
  async getPostbyId(@Param("id") id: string): Promise<Novel> {
    const review = await this.novelService.getPostById(id);
    if (!review) {
      throw new NotFoundException("Review not found");
    }
    return review;
  }

  @Put(":id")
  async updateReview(
    @Param("id") id: string,
    @Body() updatePostDto: CreateNovelDto
  ): Promise<Novel> {
    const updatedReview = await this.novelService.updatePost(id, updatePostDto);
    if (!updatedReview) {
      throw new NotFoundException("Review not found");
    }
    return updatedReview;
  }

  @Delete(":id")
  async deletePost(@Param("id") id: string): Promise<void> {
    const result = await this.novelService.deletePost(id);
    if (!result) {
      throw new NotFoundException("Review not found");
    }
  }
}
