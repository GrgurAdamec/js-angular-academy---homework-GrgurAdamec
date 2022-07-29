import { IUser } from './user.interface';

export interface IReview {
	rating: number;
	comment: string;
	show_id: number;
	user: IUser;
	image_url: string | null;
}
