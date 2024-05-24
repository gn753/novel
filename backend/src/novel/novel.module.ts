import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { NovelController } from "src/novel/novel.controller";
import { NovelService } from "src/novel/novel.service";
import { Novel, NovelSchema } from "src/schemas/novel.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Novel.name, schema: NovelSchema }]),
  ],
  providers: [NovelService],
  controllers: [NovelController],
})
export class NovelModule {}
