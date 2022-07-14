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
		{ title: 'peacemaker', description: 'bla bla', imageUrl: null, averageRating: 3, id: 3 },
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
}
