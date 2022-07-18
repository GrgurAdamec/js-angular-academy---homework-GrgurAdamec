import { Component, Input, OnInit } from '@angular/core';
import { Show } from 'app/Interfaces/show.model';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-shows-list',
	templateUrl: './shows-list.component.html',
	styleUrls: ['./shows-list.component.scss'],
})
export class ShowsListComponent implements OnInit {
	constructor() {}

	@Input()
	shows: Show[] | null = [];

	ngOnInit(): void {
		console.log('jnsad');
	}
}
