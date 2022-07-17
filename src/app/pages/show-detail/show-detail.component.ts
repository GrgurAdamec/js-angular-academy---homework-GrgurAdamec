import { Component, OnInit } from '@angular/core';
import { Show } from 'app/Interfaces/show.model';
import { ShowsService } from 'app/services/show-services/shows.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-show-detail',
	templateUrl: './show-detail.component.html',
	styleUrls: ['./show-detail.component.scss'],
})
export class ShowDetailComponent {
	public id: number = 0;
	constructor(private readonly showsService: ShowsService, route: ActivatedRoute) {
		// const _id: Observable<number> = route.params.pipe(map(p => p['id']));
		// _id.subscribe(x => this.id = x);
		this.id = route.snapshot.params['id'];
	}

	public show: Show | undefined;

	ngOnInit() {
		this.show = this.showsService.getShowById(this.id);
		console.log(this.show);
	}
}
