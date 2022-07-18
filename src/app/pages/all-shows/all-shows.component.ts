import { Component } from '@angular/core';
import { ShowsService } from 'app/services/show-services/shows.service';

@Component({
	selector: 'app-all-shows',
	templateUrl: './all-shows.component.html',
	styleUrls: ['./all-shows.component.scss'],
})
export class AllShowsComponent {
	constructor(private readonly showsService: ShowsService) {}

	public shows$ = this.showsService.getShows();
}
