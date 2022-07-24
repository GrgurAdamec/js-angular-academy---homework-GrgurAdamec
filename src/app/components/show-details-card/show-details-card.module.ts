import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowDetailsCardComponent } from './show-details-card.component';
import { MatCardModule } from '@angular/material/card';
import { ReviewFormModule } from '../review-form/review-form.module';

@NgModule({
	declarations: [ShowDetailsCardComponent],
	imports: [CommonModule, MatCardModule, ReviewFormModule],
	exports: [ShowDetailsCardComponent],
})
export class ShowDetailsCardModule {}
