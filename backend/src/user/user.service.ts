import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUserDto } from "src/schemas/create-user.dto";
import { User } from "src/schemas/user.schema";

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(user): Promise<User> {
    const result = new this.userModel(user);
    return result.save(user);
  }

  async findUserById(userId: string) {
    const user = await this.userModel.findOne({ userId: userId }).exec();
    return user;
  }

  async deleteUser(_user: CreateUserDto) {
    // 유저 아이디로 유저를 찾습니다.
    const user = await this.userModel.findOne({ userId: _user.userId }).exec();
    if (!user) {
      throw new NotFoundException("User not found");
    }

    // 입력된 비밀번호와 등록된 비밀번호를 비교합니다.
    const isPasswordValid = user.password === _user.password;
    if (!isPasswordValid) {
      throw new UnauthorizedException("Invalid credentials");
    }

    // 유저를 삭제합니다.
    const result = await this.userModel
      .deleteOne({ userId: _user.userId })
      .exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException("User not found");
    }
    return result;
  }
}
