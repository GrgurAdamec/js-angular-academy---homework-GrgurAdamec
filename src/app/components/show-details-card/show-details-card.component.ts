import { Component, Input, OnInit, Output } from '@angular/core';
import { Review } from 'app/Interfaces/review.model';
import { Show } from 'app/Interfaces/show.model';
import { AuthService } from 'app/services/show-services/auth/auth.service';
import { ReviewService } from 'app/services/show-services/review.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-show-details-card',
	templateUrl: './show-details-card.component.html',
	styleUrls: ['./show-details-card.component.scss'],
})
export class ShowDetailsCardComponent implements OnInit {
	@Input()
	show!: Show | undefined;

	public reviews!: Observable<Review[]>;

	public constructor(public readonly authService: AuthService, public readonly reviewService: ReviewService) {}

	ngOnInit() {
		this.authService.isLoggedIn();
		this.reviews = this.reviewService.getReviewsById(this.show!.id);
	}
}
