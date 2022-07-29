import { IReview } from './review.interface';
import { IUser } from './user.interface';

export class Review {
	rating: number;
	comment: string;
	show_id: number;
	user: IUser;
	image_url: string | null;

	constructor(show: IReview) {
		this.rating = show.rating;
		this.comment = show.comment;
		this.show_id = show.show_id;
		this.user = show.user;
		this.image_url = show.image_url;
	}
}
