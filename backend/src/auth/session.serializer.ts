import { Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { UserService } from "src/user/user.service";

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private userService: UserService) {
    super();
  }

  serializeUser(user: any, done: (err: Error, user: any) => void): any {
    done(null, user);
  }

  async deserializeUser(payload: any, done: any): Promise<any> {
    console.log(payload, "payload");
    const user = await this.userService.findUserById(payload.userId);

    if (!user) {
      done(new Error("no user"), null);
      return;
    }
    const userData = user.toJSON();

    const { password, ...userInfo } = userData;
    done(null, userInfo);
  }
}
