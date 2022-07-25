import { Component, OnInit } from '@angular/core';
import { INavigationLink } from 'app/Interfaces/navigation-link.interface';
import { AuthService } from 'app/services/show-services/auth/auth.service';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
	constructor(public readonly authService: AuthService) {}

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

	public readonly navigationLinksLoggedIn: Array<INavigationLink> = [
		{
			url: '',
			title: 'All Shows',
		},
		{
			url: 'top-rated-shows',
			title: 'Top rated shows',
		},
	];
}
