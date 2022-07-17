import { Component, Input, OnInit } from '@angular/core';
import { Show } from 'app/Interfaces/show.model';

@Component({
	selector: 'app-material-card',
	templateUrl: './material-card.component.html',
	styleUrls: ['./material-card.component.scss'],
})
export class MaterialCardComponent {
	@Input()
	shows: Array<Show> = [];
}
