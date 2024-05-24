import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { UserModule } from "./user/user.module";
import { AuthModule } from "./auth/auth.module";

import { ReviewModule } from "./review/review.module";
import { NovelModule } from "src/novel/novel.module";

const url = "mongodb+srv://gn753:0149@cluster0.maccmby.mongodb.net/";

@Module({
  imports: [
    MongooseModule.forRoot(url),
    NovelModule,
    UserModule,
    AuthModule,
    ReviewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
