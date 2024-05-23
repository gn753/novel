import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Query,
  Req,
  BadRequestException,
  UseGuards,
} from "@nestjs/common";
import { ReviewService } from "./review.service";
import { CreateRatingDto } from "src/schemas/review.dto";
import { CreateCommentDto } from "src/schemas/review.dto";
import { Request } from "express";
import { AuthenticatedGuard } from "src/auth/auth.guard";

@Controller("reviews")
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post("rate")
  @UseGuards(AuthenticatedGuard)
  async createOrUpdateRating(@Body() createRatingDto: CreateRatingDto) {
    console.log("실행");
    return this.reviewService.createOrUpdateRating({
      ...createRatingDto,
    });
  }

  @Post("comment")
  async addComment(
    @Req() req: Request,
    @Body() createCommentDto: CreateCommentDto
  ) {
    const userId = req.user.userId;
    console.log("Rate Request User ID:", userId); // 콘솔 로그 추가

    if (!userId) {
      throw new BadRequestException("User is not authenticated");
    }
    return this.reviewService.addComment({ ...createCommentDto, userId });
  }

  @Get("/:novelId/user")
  @UseGuards(AuthenticatedGuard)
  async findByNovelIdAndUserId(
    @Req() req: Request,
    @Param("novelId") novelId: string
  ) {
    const userId = req.user.userId;

    if (!userId) {
      throw new BadRequestException("User is not authenticated");
    }
    return this.reviewService.findByNovelIdAndUserId(novelId, userId);
  }

  @Get("/:novelId/comments")
  @UseGuards(AuthenticatedGuard)
  async findByNovelIdExcludingUser(
    @Req() req: Request,
    @Param("novelId") novelId: string,
    @Query("page") page = 1,
    @Query("limit") limit = 10
  ) {
    const userId = req.user.userId;

    if (!userId) {
      throw new BadRequestException("User is not authenticated");
    }
    const reviews = await this.reviewService.findByNovelIdExcludingUser(
      novelId,
      userId,
      Number(page),
      Number(limit)
    );
    const total = await this.reviewService.countByNovelIdExcludingUser(
      novelId,
      userId
    );
    return {
      reviews,
      total,
      page: Number(page),
      limit: Number(limit),
    };
  }
}
