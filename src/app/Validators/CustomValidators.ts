import { AbstractControl, ValidatorFn, FormControl, FormGroup } from '@angular/forms';

export class CustomValidators {
	static checkPassword(controlName: any, matchingControlName: any) {
		return (formGroup: FormGroup) => {
			const control = formGroup.controls[controlName];
			const matchingControl = formGroup.controls[matchingControlName];

			if (matchingControl.errors && !matchingControl.errors['checkPassword']) {
				return;
			}

			// set error on matchingControl if validation fails
			if (control.value !== matchingControl.value) {
				matchingControl.setErrors({ checkPassword: true });
			} else {
				matchingControl.setErrors(null);
			}
			return null;
		};
	}
}
