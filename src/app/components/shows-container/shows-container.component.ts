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
			image_url: 'assets/images/avengers.jpg',
			average_rating: 5,
		},
		{
			title: 'thor',
			description: 'bla bla',
			image_url: 'assets/images/thor.jpg',
			average_rating: null,
		},
		{ title: 'peacemaker', description: 'bla bla', image_url: null, average_rating: 3 },
	].map((show: IShow) => {
		return new Show(show);
	});

	ngOnInit(): void {
		console.log('shows container ts');
	}
}
