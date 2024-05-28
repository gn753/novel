export class CreateReviewDto {
  novelId: string;
  userId: string;
  score: number;
  review?: string;
}
export class UpdateReviewDto {
  score?: number;
  review?: string;
}
