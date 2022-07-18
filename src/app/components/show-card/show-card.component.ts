import { Component, Input, OnInit } from '@angular/core';
import { Show } from 'app/Interfaces/show.model';

@Component({
	selector: 'app-show-card',
	templateUrl: './show-card.component.html',
	styleUrls: ['./show-card.component.scss'],
})
export class ShowCardComponent implements OnInit {
	constructor() {}

	@Input()
	imageUrl!: string | null;

	@Input()
	averageRating!: number | null;

	@Input()
	title!: string;

	@Input()
	id!: number;

	ngOnInit(): void {
		console.log('show card ts');
	}
}
