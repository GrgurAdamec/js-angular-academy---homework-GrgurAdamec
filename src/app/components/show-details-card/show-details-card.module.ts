import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowDetailsCardComponent } from './show-details-card.component';
import { MatCardModule } from '@angular/material/card';
import { ReviewFormModule } from '../review-form/review-form.module';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
	declarations: [ShowDetailsCardComponent],
	imports: [CommonModule, MatCardModule, ReviewFormModule, MatSidenavModule],
	exports: [ShowDetailsCardComponent],
})
export class ShowDetailsCardModule {}
