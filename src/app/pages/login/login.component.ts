import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ILoginFormData } from 'app/Interfaces/login-form-data.interface';
import { IRegisterFormData } from 'app/Interfaces/register-form-data.interface';
import { AuthService } from 'app/services/show-services/auth/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
	public form = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required, Validators.minLength(6)]),
	});

	constructor(private readonly authService: AuthService, private readonly router: Router) {}

	public onLoginCLick(event: Event) {
		event.preventDefault();
		this.authService
			.login({
				email: this.form.controls.email.value,
				password: this.form.controls.password.value,
			} as ILoginFormData)
			.subscribe((res) => {
				console.log(res);
				console.log(res.email);
				console.log(res.id);
				console.log(res.image_url);

				sessionStorage.setItem('userId', res.id);
				sessionStorage.setItem('userEmail', res.email);
				sessionStorage.setItem('userImageUrl', res.image_url);
				this.router.navigate(['']);
			});
	}
}
