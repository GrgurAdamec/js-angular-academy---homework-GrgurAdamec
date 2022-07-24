import { Component, Input, OnInit } from '@angular/core';
import { Show } from 'app/Interfaces/show.model';
import { AuthService } from 'app/services/show-services/auth/auth.service';

@Component({
	selector: 'app-show-details-card',
	templateUrl: './show-details-card.component.html',
	styleUrls: ['./show-details-card.component.scss'],
})
export class ShowDetailsCardComponent implements OnInit {
	@Input()
	show!: Show | undefined;

	public constructor(public readonly authService: AuthService) {}

	ngOnInit() {
		this.authService.isLoggedIn();
	}
}
