import { Component, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Review } from 'app/Interfaces/review.model';
import { ISaveReview } from 'app/Interfaces/save-review.interface';
import { ReviewService } from 'app/services/show-services/review.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-review-form',
	templateUrl: './review-form.component.html',
	styleUrls: ['./review-form.component.scss'],
})
export class ReviewFormComponent {
	@Input()
	public show_id!: number;

	@Input()
	public reviews!: Observable<Review[]>;

	constructor(private readonly reviewService: ReviewService, private readonly router: Router) {}

	public form = new FormGroup({
		review: new FormControl('', [Validators.required]),
		rating: new FormControl('', [Validators.required]),
	});

	public onPostReviewClick(event: Event) {
		event.preventDefault();
		this.reviewService
			.saveReview({
				comment: this.form.controls.review.value,
				rating: this.form.controls.rating.value,
				show_id: this.show_id,
			} as ISaveReview)
			.subscribe();
		this.reviews = this.reviewService.getReviewsById(this.show_id);
	}
}
