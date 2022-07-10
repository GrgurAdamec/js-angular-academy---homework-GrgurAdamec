import { IShow } from './show.interface';

export class Show {
	public title: string;
	public description: string;
	public imageUrl: string;
	public averageRating: number;

	constructor(show: IShow) {
		this.title = show.title;
		this.description = show.description;
		this.imageUrl = show.imageUrl;
		this.averageRating = show.averageRating;
	}
}
