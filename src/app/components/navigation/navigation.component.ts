import { Component, OnInit } from '@angular/core';
import { INavigationLink } from 'app/Interfaces/navigation-link.interface';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
	public readonly navigationLinks: Array<INavigationLink> = [
		{
			url: '',
			title: 'All Shows',
		},
		{
			url: 'top-rated-shows',
			title: 'Top rated shows',
		},
		{
			url: 'login',
			title: 'Login',
		},
		{
			url: 'register',
			title: 'Register',
		},
	];
}
