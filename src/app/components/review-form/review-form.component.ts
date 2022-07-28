import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReviewService } from 'app/services/show-services/review.service';

@Component({
	selector: 'app-review-form',
	templateUrl: './review-form.component.html',
	styleUrls: ['./review-form.component.scss'],
})
export class ReviewFormComponent {
	constructor(private readonly reviewService: ReviewService) {}

	public form = new FormGroup({
		review: new FormControl('', [Validators.required]),
		rating: new FormControl('', [Validators.required]),
	});

	public onPostReviewClick(event: Event) {
		event.preventDefault();
		this.reviewService.saveReview(this.form.controls.review.value, this.form.controls.rating.value);
	}
}
