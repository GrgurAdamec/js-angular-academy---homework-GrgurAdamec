import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormModule } from 'app/components/login-form/login-form.module';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [LoginComponent],
	imports: [CommonModule, LoginFormModule, MatCardModule, MatButtonModule, ReactiveFormsModule, RouterModule],
	exports: [LoginComponent],
})
export class LoginModule {}
