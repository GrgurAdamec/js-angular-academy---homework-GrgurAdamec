import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowDetailComponent } from './show-detail.component';
import { MaterialCardModule } from 'app/components/material-card/material-card.module';

@NgModule({
	declarations: [ShowDetailComponent],
	imports: [CommonModule, MaterialCardModule],
	exports: [ShowDetailComponent],
})
export class ShowDetailModule {}
