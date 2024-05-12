import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/schemas/user/create-user.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async register(userDto: CreateUserDto) {
    const user = await this.userService.findUserById(userDto.userId);

    if (user) {
      throw new HttpException(
        '해당 유저가 이미 있습니다.',
        HttpStatus.BAD_REQUEST,
      );
    }
    //비밀번호 해시화해서 암호화 처리 10솔트
    const encryptedPassword = bcrypt.hashSync(userDto.password, 10);
    try {
      const user = await this.userService.createUser({
        ...userDto,
        password: encryptedPassword,
      });
      user.password = undefined;
      return user;
    } catch (error) {
      throw new HttpException('서버 에러', 500);
    }
  }
  //유저 검증
  async validateUser(userDto: CreateUserDto) {
    const user = await this.userService.findUserById(userDto.userId);
    if (!user) {
      return null;
    }

    const userData = user.toJSON(); //json으로 변환시켜서 데이터만추출
    const { password: hashedPassword, ...userInfo } = userData;
    if (bcrypt.compareSync(userDto.password, hashedPassword)) {
      console.log(userInfo, '뭐지?');
      return userInfo;
    }
    return null;
  }
}
