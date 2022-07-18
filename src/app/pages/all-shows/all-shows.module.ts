import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllShowsComponent } from './all-shows.component';
import { ShowsListModule } from 'app/components/shows-list/shows-list.module';

@NgModule({
	declarations: [AllShowsComponent],
	imports: [CommonModule, ShowsListModule],
	exports: [AllShowsComponent],
})
export class AllShowsModule {}
