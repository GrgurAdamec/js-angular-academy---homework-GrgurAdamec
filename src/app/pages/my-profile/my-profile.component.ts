import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'app/services/show-services/review.service';

@Component({
	selector: 'app-my-profile',
	templateUrl: './my-profile.component.html',
	styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent {
	constructor(public readonly reviewService: ReviewService) {}

	public onFileChange(file: File | null) {
		console.log(file);
	}
}
