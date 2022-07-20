import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [LoginFormComponent],
	exports: [LoginFormComponent],
	imports: [CommonModule, MatInputModule, ReactiveFormsModule],
})
export class LoginFormModule {}
