import { Injectable } from '@angular/core';
import { IShow } from 'app/Interfaces/show.interface';
import { Show } from 'app/Interfaces/show.model';
import { Observable } from 'rxjs/internal/Observable';
import { delay, filter, map, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ShowsResponse } from 'app/Interfaces/shows-response.model';

@Injectable({
	providedIn: 'root',
})
export class ShowsService {
	constructor(private readonly http: HttpClient) {}

	// private shows: Array<Show> = [
	// 	{
	// 		title: 'avengers',
	// 		description: 'bla bla',
	// 		image_url: 'assets/images/avengers.jpg',
	// 		average_rating: 5,
	// 		id: 1,
	// 		// reviews: [
	// 		// 	{ text: 'Odlican, vrlo dobar, najbolji', rating: 5, id: 1 },
	// 		// 	{ text: 'Avengers woo', rating: 5, id: 2 },
	// 		// ],
	// 	},
	// 	{
	// 		title: 'thor',
	// 		description: 'bla bla',
	// 		image_url: 'assets/images/thor.jpg',
	// 		average_rating: null,
	// 		id: 2,
	// 		// reviews: [{text: 'bla', rating: 3, id: 1}, {text: 'kmačcx', rating: 5, id: 2}],
	// 		// reviews: null,
	// 	},
	// 	{
	// 		title: 'peacemaker',
	// 		description: 'bla bla',
	// 		image_url: 'assets/images/peacemaker.jpg',
	// 		average_rating: 3,
	// 		id: 3,
	// 		// reviews: [
	// 		// 	{ text: 'A oke je', rating: 2, id: 1 },
	// 		// 	{ text: 'Peacemaker je dosta dobar uživio sam se u film bravo svaka čast', rating: 4, id: 2 },
	// 		// ],
	// 	},
	// 	{
	// 		title: 'black panther',
	// 		description: 'bla bla',
	// 		image_url: 'assets/images/panther.jpg',
	// 		average_rating: 2,
	// 		id: 4,
	// 		// reviews: [
	// 		// 	{ text: 'Nije mi se svidio', rating: 1, id: 1 },
	// 		// 	{ text: 'Mislio sam da je film od panterama a ne o superherojima, razočaran', rating: 3, id: 2 },
	// 		// ],
	// 	},
	// 	{
	// 		title: 'black widow',
	// 		description: 'bla bla',
	// 		image_url: 'assets/images/widow.jpg',
	// 		average_rating: 3,
	// 		id: 5,
	// 		// reviews: [
	// 		// 	{ text: 'Autentično osrednji', rating: 3, id: 1 },
	// 		// 	{ text: 'Marko mi je rekao da mu je dobar film ali meni nije', rating: 3, id: 2 },
	// 		// ],
	// 	},
	// 	{
	// 		title: 'captain america',
	// 		description: 'bla bla',
	// 		image_url: 'assets/images/america.jpg',
	// 		average_rating: 4.2,
	// 		id: 6,
	// 		// reviews: [
	// 		// 	{ text: 'Hmmmmmmmmm', rating: 4, id: 1 },
	// 		// 	{
	// 		// 		text: 'Naj bolji, potsječa me na fašnik kada sam bijo mali i maskirao se u kapetana ameriku jel mi je naj draži super  heroj',
	// 		// 		rating: 5,
	// 		// 		id: 2,
	// 		// 	},
	// 		// 	{ text: 'Komentiram samo zato da kažem koliko su ljudi nepismeni, inače dobar film', rating: 5, id: 2 },
	// 		// ],
	// 	},
	// 	{
	// 		title: 'captain marvel',
	// 		description: 'bla bla',
	// 		image_url: 'assets/images/marvel.jpg',
	// 		average_rating: 4.5,
	// 		id: 7,
	// 		// reviews: [
	// 		// 	{ text: 'Odličan film, kao tup gun ali sa ženskom glumicom', rating: 5, id: 1 },
	// 		// 	{ text: 'All around me are familiar faces', rating: 4, id: 2 },
	// 		// ],
	// 	},
	// 	{
	// 		title: 'captain marvel 2',
	// 		description: 'bla bla',
	// 		image_url: null,
	// 		average_rating: 4.5,
	// 		id: 8,
	// 		// reviews: [
	// 		// 	{ text: 'Odličan film, kao tup gun ali sa ženskom glumicom', rating: 5, id: 1 },
	// 		// 	{ text: 'All around me are familiar faces', rating: 4, id: 2 },
	// 		// ],
	// 	},
	// 	{
	// 		title: 'captain marvel 3',
	// 		description: 'bla bla',
	// 		image_url: null,
	// 		average_rating: 4.5,
	// 		id: 9,
	// 		// reviews: [
	// 		// 	{ text: 'Odličan film, kao tup gun ali sa ženskom glumicom', rating: 5, id: 1 },
	// 		// 	{ text: 'All around me are familiar faces', rating: 4, id: 2 },
	// 		// ],
	// 	},
	// ].map((show: IShow) => {
	// 	return new Show(show);
	// });

	public headerDict = {
		client: 'D4gFhxgL4yJemNFO34Idlg',
		'access-token': 'tFaYehu9ZjVWiQvEY2t9RA',
		uid: 'grga@grga.com',
	};

	public requestOptions = {
		headers: new Headers(this.headerDict),
	};

	public headers = new HttpHeaders()
		.set('client', sessionStorage.getItem('client') as string)
		.set('access-token', sessionStorage.getItem('access-token') as string)
		.set('uid', sessionStorage.getItem('uid') as string);

	public getShows(): Observable<Array<Show>> {
		// let response = this.http.get<{body: ShowsResponse}>('https://tv-shows.infinum.academy/shows', {
		// 	headers: this.headers,
		// }).pipe(map((res) => {
		// 	return res.body.shows;
		// })
		// );

		return this.http
			.get<{ shows: Array<Show> }>('https://tv-shows.infinum.academy/shows', { headers: this.headers })
			.pipe(
				map((res) => {
					return res.shows as Array<Show>;
				}),
			);
	}

	// public getShows(): Observable<Array<Show>> {
	// 	return of(this.shows).pipe(delay(200));
	// }

	public getTopRatedShows(): Observable<Array<Show>> {
		return this.http
			.get<{ shows: Array<Show> }>('https://tv-shows.infinum.academy/shows/top_rated', { headers: this.headers })
			.pipe(
				map((res) => {
					return res.shows as Array<Show>;
				}),
			);
	}

	public getShowById(id: number): Observable<Show | undefined> {
		return this.http
			.get<{ show: Show }>(`https://tv-shows.infinum.academy/shows/${id}`, { headers: this.headers })
			.pipe(
				map((res) => {
					return res.show as Show;
				}),
			);
	}
}
