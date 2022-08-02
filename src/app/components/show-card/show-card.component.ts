import { Component, Input, OnInit } from '@angular/core';
import { Show } from 'app/Interfaces/show.model';

@Component({
	selector: 'app-show-card',
	templateUrl: './show-card.component.html',
	styleUrls: ['./show-card.component.scss'],
})
export class ShowCardComponent {
	constructor() {}

	@Input()
	image_url!: string | null;

	@Input()
	average_rating!: number | null;

	@Input()
	title!: string;

	@Input()
	id!: number;
}
