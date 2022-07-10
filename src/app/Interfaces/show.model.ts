class Shows {
	public title: string;
	public description: string;
	public imageUrl: string | null;
	public averageRating: number;

	constructor(show: IShows) {
		this.title = show.title;
		this.description = show.description;
		this.imageUrl = show.imageUrl;
		this.averageRating = show.averageRating;
	}
}
