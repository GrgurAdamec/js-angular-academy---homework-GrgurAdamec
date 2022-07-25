import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterFormModule } from 'app/components/register-form/register-form.module';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [RegisterComponent],
	imports: [CommonModule, RegisterFormModule, MatCardModule, MatButtonModule, ReactiveFormsModule, RouterModule],
	exports: [RegisterComponent],
})
export class RegisterModule {}
