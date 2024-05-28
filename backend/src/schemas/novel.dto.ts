import { IsArray, IsString } from "class-validator";

export class CreateNovelDto {
  @IsString()
  readonly novelId: string;

  @IsString()
  readonly title: string;

  @IsString()
  readonly content: string;

  @IsArray()
  readonly category: string[];

  readonly averageRating: number;

  readonly img?: string;
}
