import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import * as cookieParser from "cookie-parser";
import * as session from "express-session";
import * as passport from "passport";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors({
    // 허용할 출처(Origin)
    origin: "*",

    // 클라이언트에서 허용할 HTTP 메서드
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",

    // 허용할 HTTP 헤더
    allowedHeaders: "Origin,X-Requested-With,Content-Type,Accept,Authorization",

    // 브라우저에 응답으로 보낼 헤더
    exposedHeaders: "Custom-Header",

    // 클라이언트와 서버 간에 인증 정보를 주고받을 수 있도록 함
    credentials: true,

    // Preflight 요청의 캐시 시간 (초 단위)
    maxAge: 3600,

    // Preflight 요청을 계속 진행할지 여부
    preflightContinue: false,

    // Preflight 요청에 대한 응답 상태 코드
    optionsSuccessStatus: 204,
  });
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());
  app.use(
    session({
      secret: "secret-key",
      resave: false, // 세션을 항상 저장할지 여부
      saveUninitialized: false, //세션이 저장되기 전에 빈 값을 저장할지 여부
      cookie: { maxAge: 30 * 60 * 1000 }, // 30분으로 변경
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(8080);
}
bootstrap();
