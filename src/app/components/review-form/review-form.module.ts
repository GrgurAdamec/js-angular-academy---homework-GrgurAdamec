import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { ReviewFormComponent } from './review-form.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
	declarations: [ReviewFormComponent],
	exports: [ReviewFormComponent],
	imports: [
		CommonModule,
		MatCardModule,
		MatButtonModule,
		ReactiveFormsModule,
		RouterModule,
		MatInputModule,
		ReactiveFormsModule,
		MatSelectModule,
	],
})
export class ReviewFormModule {}
