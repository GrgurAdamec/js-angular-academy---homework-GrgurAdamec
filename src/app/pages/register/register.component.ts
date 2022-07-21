import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { IAuthFormData } from 'app/Interfaces/auth-form-data.interface';
import { AuthService } from 'app/services/show-services/auth/auth.service';
import { CustomValidators } from 'app/Validators/CustomValidators';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
	public form = new FormGroup(
		{
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', [Validators.required, Validators.minLength(6)]),
			password_confirmation: new FormControl('', [Validators.required]),
		},
		{
			validators: CustomValidators.checkPassword('password', 'password_confirmation'),
		},
	);

	constructor(private readonly authService: AuthService) {}

	public onRegisterClick(event: Event) {
		event.preventDefault();

		this.authService
			.register({
				email: this.form.controls.email.value,
				password: this.form.controls.password.value,
				password_confirmation: this.form.controls.password_confirmation.value,
			} as IAuthFormData)
			.subscribe();
	}
}
