import { Component } from '@angular/core';
import { IShow } from 'app/Interfaces/show.interface';
import { Show } from 'app/Interfaces/show.model';
import { ShowsService } from 'app/services/show-services/shows.service';
import { Observable, of } from 'rxjs';

@Component({
	selector: 'app-all-shows',
	templateUrl: './all-shows.component.html',
	styleUrls: ['./all-shows.component.scss'],
})
export class AllShowsComponent {
	constructor(private readonly showsService: ShowsService) {}
	public shows$ = this.showsService.getShows();
}
