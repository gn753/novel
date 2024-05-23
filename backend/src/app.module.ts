import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { UserModule } from "./user/user.module";
import { AuthModule } from "./auth/auth.module";
import { PostModule } from "src/post/post.module";
import { ReviewModule } from "./review/review.module";

const url = "mongodb+srv://gn753:0149@cluster0.maccmby.mongodb.net/";

@Module({
  imports: [
    MongooseModule.forRoot(url),
    PostModule,
    UserModule,
    AuthModule,
    ReviewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
