import { Component, OnInit } from '@angular/core';
import { Show } from 'app/Interfaces/show.model';
import { ShowsService } from 'app/services/show-services/shows.service';

@Component({
	selector: 'app-show-detail',
	templateUrl: './show-detail.component.html',
	styleUrls: ['./show-detail.component.scss'],
})
export class ShowDetailComponent {
	constructor(private readonly showsService: ShowsService) {}

	public shows: Array<Show> = this.showsService.getShows();
}
