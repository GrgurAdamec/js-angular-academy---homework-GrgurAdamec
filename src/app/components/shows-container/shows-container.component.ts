import { Component, OnInit } from '@angular/core';
import { IShow } from 'app/Interfaces/show.interface';
import { Show } from 'app/Interfaces/show.model';

@Component({
	selector: 'app-shows-container',
	templateUrl: './shows-container.component.html',
	styleUrls: ['./shows-container.component.scss'],
})
export class ShowsContainerComponent implements OnInit {
	constructor() {}

	public shows: Array<Show> = [
		{
			title: 'avengers',
			description: 'bla bla',
			imageUrl: 'assets/images/avengers.jpg',
			averageRating: 5,
		},
		{
			title: 'thor',
			description: 'bla bla',
			imageUrl: 'assets/images/thor.jpg',
			averageRating: null,
		},
		{ title: 'peacemaker', description: 'bla bla', imageUrl: null, averageRating: 3 },
	].map((show: IShow) => {
		return new Show(show);
	});

	ngOnInit(): void {
		console.log('shows container ts');
	}
}
