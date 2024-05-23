import { IsString } from "class-validator";

export class CreateUserDto {
  @IsString()
  userId: string;

  @IsString()
  password: string;

  readonly isAdmin?: boolean;
}
