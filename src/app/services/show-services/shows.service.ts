import { Injectable } from '@angular/core';
import { IShow } from 'app/Interfaces/show.interface';
import { Show } from 'app/Interfaces/show.model';
import { Observable } from 'rxjs/internal/Observable';
import { delay, filter, map, of } from 'rxjs';

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
			reviews: [
				{ text: 'Odlican, vrlo dobar, najbolji', rating: 5, id: 1 },
				{ text: 'Avengers woo', rating: 5, id: 2 },
			],
		},
		{
			title: 'thor',
			description: 'bla bla',
			imageUrl: 'assets/images/thor.jpg',
			averageRating: null,
			id: 2,
			// reviews: [{text: 'bla', rating: 3, id: 1}, {text: 'kmačcx', rating: 5, id: 2}],
			reviews: null,
		},
		{
			title: 'peacemaker',
			description: 'bla bla',
			imageUrl: 'assets/images/peacemaker.jpg',
			averageRating: 3,
			id: 3,
			reviews: [
				{ text: 'A oke je', rating: 2, id: 1 },
				{ text: 'Peacemaker je dosta dobar uživio sam se u film bravo svaka čast', rating: 4, id: 2 },
			],
		},
		{
			title: 'black panther',
			description: 'bla bla',
			imageUrl: 'assets/images/panther.jpg',
			averageRating: 2,
			id: 4,
			reviews: [
				{ text: 'Nije mi se svidio', rating: 1, id: 1 },
				{ text: 'Mislio sam da je film od panterama a ne o superherojima, razočaran', rating: 3, id: 2 },
			],
		},
		{
			title: 'black widow',
			description: 'bla bla',
			imageUrl: 'assets/images/widow.jpg',
			averageRating: 3,
			id: 5,
			reviews: [
				{ text: 'Autentično osrednji', rating: 3, id: 1 },
				{ text: 'Marko mi je rekao da mu je dobar film ali meni nije', rating: 3, id: 2 },
			],
		},
		{
			title: 'captain america',
			description: 'bla bla',
			imageUrl: 'assets/images/america.jpg',
			averageRating: 4.2,
			id: 6,
			reviews: [
				{ text: 'Hmmmmmmmmm', rating: 4, id: 1 },
				{
					text: 'Naj bolji, potsječa me na fašnik kada sam bijo mali i maskirao se u kapetana ameriku jel mi je naj draži super  heroj',
					rating: 5,
					id: 2,
				},
				{ text: 'Komentiram samo zato da kažem koliko su ljudi nepismeni, inače dobar film', rating: 5, id: 2 },
			],
		},
		{
			title: 'captain marvel',
			description: 'bla bla',
			imageUrl: 'assets/images/marvel.jpg',
			averageRating: 4.5,
			id: 7,
			reviews: [
				{ text: 'Odličan film, kao tup gun ali sa ženskom glumicom', rating: 5, id: 1 },
				{ text: 'All around me are familiar faces', rating: 4, id: 2 },
			],
		},
	].map((show: IShow) => {
		return new Show(show);
	});

	public getShows(): Observable<Array<Show>> {
		return of(this.shows).pipe(delay(200));
	}

	// public getShows(): Array<Show> {
	// 	return this.shows;
	// }

	public getTopRatedShows(): Observable<Array<Show>> {
		return of(
			this.shows.filter((show: Show) => {
				return show.averageRating && show.averageRating >= 4;
			}),
		).pipe(delay(100));
	}

	public getShowById(id: number): Observable<Show | undefined> {
		return this.getShows().pipe(
			map((shows) => {
				return shows.find((show) => {
					return show.id === id;
				});
			}),
		);
	}
}
