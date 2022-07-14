import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopRatedShowsComponent } from './top-rated-shows.component';
import { ShowsListModule } from 'app/components/shows-list/shows-list.module';

@NgModule({
	declarations: [TopRatedShowsComponent],
	imports: [CommonModule, ShowsListModule],
	exports: [TopRatedShowsComponent],
})
export class TopRatedShowsModule {}
