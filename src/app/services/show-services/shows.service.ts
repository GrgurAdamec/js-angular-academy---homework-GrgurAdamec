import { Injectable } from '@angular/core';
import { IShow } from 'app/Interfaces/show.interface';
import { Show } from 'app/Interfaces/show.model';

@Injectable({
	providedIn: 'root',
})
export class ShowsService {
	private shows: Array<Show> = [
		{
			title: 'avengers',
			description: 'bla bla',
			imageUrl: 'assets/images/avengers.jpg',
			averageRating: 5,
			id: 1,
		},
		{
			title: 'thor',
			description: 'bla bla',
			imageUrl: 'assets/images/thor.jpg',
			averageRating: null,
			id: 2,
		},
		{
			title: 'peacemaker',
			description: 'bla bla',
			imageUrl: 'assets/images/peacemaker.jpg',
			averageRating: 3,
			id: 3,
		},
		{
			title: 'black panther',
			description: 'bla bla',
			imageUrl: 'assets/images/panther.jpg',
			averageRating: 2,
			id: 4,
		},
		{ title: 'black widow', description: 'bla bla', imageUrl: 'assets/images/widow.jpg', averageRating: 3, id: 5 },
		{
			title: 'captain america',
			description: 'bla bla',
			imageUrl: 'assets/images/america.jpg',
			averageRating: 4.2,
			id: 6,
		},
		{
			title: 'captain marvel',
			description: 'bla bla',
			imageUrl: 'assets/images/marvel.jpg',
			averageRating: 4.1,
			id: 7,
		},
	].map((show: IShow) => {
		return new Show(show);
	});

	public getShows(): Array<Show> {
		return this.shows;
	}

	public getTopRatedShows(): Array<Show> {
		return this.shows.filter((show: Show) => {
			return show.averageRating && show.averageRating >= 4;
		});
	}

	public getShowById(id: number): Show | undefined {
		console.log(id);
		return this.shows.find((show: Show) => {
			return show.id == id;
		});
	}
}
