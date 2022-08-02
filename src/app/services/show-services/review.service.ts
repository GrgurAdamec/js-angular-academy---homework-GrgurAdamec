import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IReview } from 'app/Interfaces/review.interface';
import { Review } from 'app/Interfaces/review.model';
import { ISaveReview } from 'app/Interfaces/save-review.interface';
import { map, of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
	providedIn: 'root',
})
export class ReviewService {
	constructor(private readonly http: HttpClient) {}

	public headers = new HttpHeaders()
		.set('client', sessionStorage.getItem('client') as string)
		.set('access-token', sessionStorage.getItem('access-token') as string)
		.set('uid', sessionStorage.getItem('uid') as string);

	public saveReview(data: ISaveReview): Observable<IReview> {
		console.log(data);
		return this.http.post<IReview>('https://tv-shows.infinum.academy/reviews', data, { headers: this.headers });
	}

	public getReviewsById(id: number): Observable<Array<Review>> {
		return this.http
			.get<{ reviews: Array<Review> }>(`https://tv-shows.infinum.academy/shows/${id}/reviews`, {
				headers: this.headers,
			})
			.pipe(
				map((res) => {
					return res.reviews;
				}),
			);
	}

	public getEmail(): string | null {
		return sessionStorage.getItem('userEmail');
	}
}
