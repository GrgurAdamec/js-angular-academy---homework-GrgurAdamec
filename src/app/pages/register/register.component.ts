import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
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
			password2: new FormControl('', [Validators.required]),
		},
		{
			validators: this.checkPassword('password', 'password2'),
		},
	);

	checkPassword(password1: string, password2: string): ValidatorFn {
		return (control: AbstractControl): ValidationErrors | null => {
			const pass1 = control.get(password1);
			const pass2 = control.get(password2);

			return pass1 && pass2 && pass1.value !== pass2.value ? { mismatch: true } : null;
		};
	}

	public onRegisterClick(event: Event) {
		event.preventDefault();
		console.log(this.form.value);
	}
}
