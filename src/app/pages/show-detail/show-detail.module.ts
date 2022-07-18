import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowDetailComponent } from './show-detail.component';
import { ShowDetailsCardModule } from 'app/components/show-details-card/show-details-card.module';

@NgModule({
	declarations: [ShowDetailComponent],
	imports: [CommonModule, ShowDetailsCardModule],
	exports: [ShowDetailComponent],
})
export class ShowDetailModule {}
