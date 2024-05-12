import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'userId' }); // 기본값이 username이므로 email로 변경
  }

  async validate(userId: string, password: string): Promise<any> {
    const user = await this.authService.validateUser({ userId, password });

    if (!user) {
      return null;
    }
    return user;
  }
}
