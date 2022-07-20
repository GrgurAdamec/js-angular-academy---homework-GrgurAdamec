import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './register-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
	declarations: [RegisterFormComponent],
	exports: [RegisterFormComponent],
	imports: [CommonModule, MatInputModule, ReactiveFormsModule],
})
export class RegisterFormModule {}
