import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AllShowsComponent } from './pages/all-shows/all-shows.component';
import { TopRatedShowsComponent } from './pages/top-rated-shows/top-rated-shows.component';

const routes: Routes = [
	{
		path: '',
		component: MainLayoutComponent,
		children: [
			{
				path: '',
				component: AllShowsComponent,
			},
			{
				path: 'top-rated-shows',
				component: TopRatedShowsComponent,
			},
			{
				path: '**',
				component: AllShowsComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
