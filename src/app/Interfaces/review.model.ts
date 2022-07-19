import { IReview } from './review.interface';

export class Review {
	public text: string;
	public rating: number;
	public id: number;

	constructor(show: IReview) {
		this.text = show.text;
		this.rating = show.rating;
		this.id = show.id;
	}
}
