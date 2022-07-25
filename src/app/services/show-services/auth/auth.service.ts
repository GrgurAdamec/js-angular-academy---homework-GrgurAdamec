import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginFormData } from 'app/Interfaces/login-form-data.interface';
import { IRegisterFormData } from 'app/Interfaces/register-form-data.interface';
import { IUser } from 'app/Interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(private readonly http: HttpClient) {}

	public register(data: IRegisterFormData): Observable<IUser> {
		console.log(data);
		return this.http.post<IUser>('https://tv-shows.infinum.academy/users', data);
	}

	public login(data: ILoginFormData): Observable<IUser> {
		console.log(data);
		return this.http.post<IUser>('https://tv-shows.infinum.academy/users/sign_in', data);
	}
}
