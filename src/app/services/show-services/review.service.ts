import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ReviewService {
	constructor(private readonly http: HttpClient) {}

	public saveReview(review: string | null, rating: string | null): void {
		console.log('Review: ' + review + ', Rating: ' + rating);
	}
}
