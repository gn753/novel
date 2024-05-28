import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "src/schemas/create-user.dto";
import { AuthenticatedGuard, LocalAuthGuard } from "./auth.guard";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("register")
  async register(@Body() userDto: CreateUserDto) {
    return await this.authService.register(userDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post("login")
  login(@Request() req) {
    return req.user;
  }

  @UseGuards(AuthenticatedGuard)
  @Get("userInfo")
  test(@Request() req) {
    return req.user;
  }
}
