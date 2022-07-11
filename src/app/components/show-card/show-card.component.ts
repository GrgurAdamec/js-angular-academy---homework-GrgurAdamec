import { Component, Input, OnInit } from '@angular/core';
import { Show } from 'app/Interfaces/show.model';

@Component({
	selector: 'app-show-card',
	templateUrl: './show-card.component.html',
	styleUrls: ['./show-card.component.scss'],
})
export class ShowCardComponent implements OnInit {
	constructor() {}

	@Input()
	show!: Show;

	ngOnInit(): void {
		console.log('akshd');
	}
}
