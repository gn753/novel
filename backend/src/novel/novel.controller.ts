import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
} from "@nestjs/common";
import { NovelService } from "src/novel/novel.service";
import { CreateNovelDto } from "src/schemas/novel.dto";

@Controller("novels")
export class NovelController {
  constructor(private readonly novelService: NovelService) {}

  @Post()
  create(@Body() createNovelDto: CreateNovelDto) {
    return this.novelService.create(createNovelDto);
  }

  @Get()
  findAll() {
    return this.novelService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.novelService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateNovelDto: CreateNovelDto) {
    return this.novelService.update(id, updateNovelDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.novelService.remove(id);
  }
}
