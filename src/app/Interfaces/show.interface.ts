import { IReview } from './review.interface';

export interface IShow {
	title: string;
	description: string;
	image_url: string | null;
	average_rating: number | null;
	id: number;
	//no_of_reviews: number | null;
}
