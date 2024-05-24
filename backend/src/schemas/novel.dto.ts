import { IsArray, IsString } from "class-validator";

export class CreateNovelDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly content: string;

  @IsArray()
  readonly category: string[];

  readonly image?: string;
}
