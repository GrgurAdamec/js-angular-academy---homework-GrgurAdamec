import { Component } from '@angular/core';
import { Show } from './Interfaces/show.model';
import { ShowsContainerComponent } from './components/shows-container/shows-container.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'infinum-academy-app';

	// avengers = new Show({
	// 	title: 'avengers',
	// 	description: 'bla bla',
	// 	imageUrl: 'assets/images/avengers.jpg',
	// 	averageRating: 5,
	// });

	// thor = new Show({
	// 	title: 'thor',
	// 	description: 'bla bla',
	// 	imageUrl: 'assets/images/thor.jpg',
	// 	averageRating: 4
	// });

	// peacemaker = new Show({
	// 	title: 'peacemaker',
	// 	description: 'bla bla',
	// 	imageUrl: 'assets/images/peacemaker.jpg',
	// 	averageRating: 3,
	// });

	// public shows: Array<Show> = [this.avengers, this.thor, this.peacemaker];
}
