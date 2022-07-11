// Copyright 2022 danipavic
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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
