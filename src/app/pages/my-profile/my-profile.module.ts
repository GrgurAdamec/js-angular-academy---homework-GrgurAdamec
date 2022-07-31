import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile.component';
import { MatCardModule } from '@angular/material/card';
import { UploadModule } from 'app/components/upload/upload.module';

@NgModule({
	declarations: [MyProfileComponent],
	exports: [MyProfileComponent],
	imports: [CommonModule, MatCardModule, UploadModule],
})
export class MyProfileModule {}
