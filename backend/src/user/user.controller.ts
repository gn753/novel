import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { CreateUserDto } from 'src/schemas/user/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/create')
  createUser(@Body() user: CreateUserDto) {
    return this.userService.createUser(user);
  }

  @Get('/:userId')
  async getUser(@Param('userId') userId: string) {
    const user = await this.userService.findUserById(userId);
    console.log(user);
    return user;
  }

  @Delete('/delete')
  deleteUser(@Body() user: CreateUserDto) {
    return this.userService.deleteUser(user);
  }
}
