import { Component, OnInit } from '@angular/core';
import { Show } from 'app/Interfaces/show.model';

@Component({
	selector: 'app-shows-container',
	templateUrl: './shows-container.component.html',
	styleUrls: ['./shows-container.component.scss'],
})
export class ShowsContainerComponent implements OnInit {
	constructor() {}

	avengers = new Show({
		title: 'avengers',
		description: 'bla bla',
		imageUrl: 'assets/images/avengers.jpg',
		averageRating: 5,
	});

	thor = new Show({
		title: 'thor',
		description: 'bla bla',
		imageUrl: 'assets/images/thor.jpg',
		averageRating: 4,
	});

	peacemaker = new Show({
		title: 'peacemaker',
		description: 'bla bla',
		imageUrl: 'assets/images/peacemaker.jpg',
		averageRating: 3,
	});

	public shows: Array<Show> = [this.avengers, this.thor, this.peacemaker];

	ngOnInit(): void {
		console.log('shows container ts');
	}
}
