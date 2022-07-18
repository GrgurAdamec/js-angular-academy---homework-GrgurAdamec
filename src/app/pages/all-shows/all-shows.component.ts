import { Component, OnInit } from '@angular/core';
import { Show } from 'app/Interfaces/show.model';
import { ShowsService } from 'app/services/show-services/shows.service';

@Component({
	selector: 'app-all-shows',
	templateUrl: './all-shows.component.html',
	styleUrls: ['./all-shows.component.scss'],
})
export class AllShowsComponent implements OnInit {
	constructor(private readonly showsService: ShowsService) {}

	public shows: Array<Show> = this.showsService.getShows();

	ngOnInit() {
		console.log('AllShowsComponent');
	}
}
