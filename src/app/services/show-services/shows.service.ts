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
		return this.http
			.get<{ shows: Array<Show> }>('https://tv-shows.infinum.academy/shows', { headers: this.headers })
			.pipe(
				map((res) => {
					return res.shows as Array<Show>;
				}),
			);
	}

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
