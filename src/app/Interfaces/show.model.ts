import { IReview } from './review.interface';
import { IShow } from './show.interface';

export class Show {
	public title: string;
	public description: string;
	public image_url: string | null;
	public average_rating: number | null;
	public id: number;
	// public no_of_reviews: number | null;
	constructor(show: IShow) {
		this.title = show.title;
		this.description = show.description;
		this.image_url = show.image_url;
		this.average_rating = show.average_rating;
		this.id = show.id;
		//this.no_of_reviews = show.no_of_reviews;
	}
}
