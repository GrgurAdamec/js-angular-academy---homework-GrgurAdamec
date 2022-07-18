import { Component, OnInit } from '@angular/core';
import { Show } from 'app/Interfaces/show.model';
import { ShowsService } from 'app/services/show-services/shows.service';

@Component({
	selector: 'app-top-rated-shows',
	templateUrl: './top-rated-shows.component.html',
	styleUrls: ['./top-rated-shows.component.scss'],
})
export class TopRatedShowsComponent {
	constructor(private readonly showsService: ShowsService) {}

	public shows: Array<Show> = this.showsService.getTopRatedShows();
}
