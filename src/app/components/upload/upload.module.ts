import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
	declarations: [UploadComponent],
	exports: [UploadComponent],
	imports: [CommonModule, MatCardModule],
})
export class UploadModule {}
