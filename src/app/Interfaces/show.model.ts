import { IReview } from './review.interface';
import { IShow } from './show.interface';

export class Show {
	public title: string;
	public description: string;
	public imageUrl: string | null;
	public averageRating: number | null;
	public id: number;
	public reviews: IReview[] | null;

	constructor(show: IShow) {
		this.title = show.title;
		this.description = show.description;
		this.imageUrl = show.imageUrl;
		this.averageRating = show.averageRating;
		this.id = show.id;
		this.reviews = show.reviews;
	}
}
