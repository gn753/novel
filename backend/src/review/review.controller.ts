import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Put,
} from "@nestjs/common";
import { ReviewService } from "./review.service";
import { CreateReviewDto, UpdateReviewDto } from "src/schemas/review.dto";

@Controller("reviews")
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}
  //소설 생성
  @Post()
  create(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewService.addReview(createReviewDto);
  }
  //리스트 가져오기
  @Get()
  findAll() {
    return this.reviewService.findAll();
  }
  //상세
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.reviewService.findOne(id);
  }
  // 수정
  @Put(":id")
  update(@Param("id") id: string, @Body() updateReviewDto: UpdateReviewDto) {
    return this.reviewService.update(id, updateReviewDto);
  }
  //삭제
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.reviewService.remove(id);
  }
}
