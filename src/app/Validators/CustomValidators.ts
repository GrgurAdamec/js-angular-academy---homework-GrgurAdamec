import { AbstractControl, ValidatorFn, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

export class CustomValidators {
	static checkPassword(password: string, password_confirmation: string): ValidatorFn | null {
		return (control: AbstractControl): ValidationErrors | null => {
			const pass1 = control.get(password);
			const pass2 = control.get(password_confirmation);

			return pass1 && pass2 && pass1.value !== pass2.value ? { mismatch: true } : null;
		};
	}
}
