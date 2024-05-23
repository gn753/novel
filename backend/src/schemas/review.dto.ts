export class CreateCommentDto {
  novelId: string;
  userId: string;
  comment: string;
}

export class CreateRatingDto {
  novelId: string;
  userId: string;
  rating: number;
}
