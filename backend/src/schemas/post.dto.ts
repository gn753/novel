import { IsArray, IsString } from "class-validator";

export class CreatePostDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly content: string;

  @IsArray()
  readonly genre?: string[];

  readonly image?: string;
}
