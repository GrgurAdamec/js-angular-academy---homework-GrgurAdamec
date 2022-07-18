import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowDetailsCardComponent } from './show-details-card.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
	declarations: [ShowDetailsCardComponent],
	imports: [CommonModule, MatCardModule],
	exports: [ShowDetailsCardComponent],
})
export class ShowDetailsCardModule {}
