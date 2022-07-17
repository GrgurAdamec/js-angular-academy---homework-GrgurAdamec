import { Component, Input, OnInit } from '@angular/core';
import { Show } from 'app/Interfaces/show.model';

@Component({
	selector: 'app-show-details-card',
	templateUrl: './show-details-card.component.html',
	styleUrls: ['./show-details-card.component.scss'],
})
export class ShowDetailsCardComponent {
	@Input()
	shows: Array<Show> = [];
}
