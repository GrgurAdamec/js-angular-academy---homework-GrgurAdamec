import { Component, OnInit } from '@angular/core';
import { INavigationLink } from 'app/Interfaces/navigation-link.interface';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
	public readonly navigationLinks: Array<INavigationLink> = [];
}
