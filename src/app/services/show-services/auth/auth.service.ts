import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginFormData } from 'app/Interfaces/login-form-data.interface';
import { IRegisterFormData } from 'app/Interfaces/register-form-data.interface';
import { IUser } from 'app/Interfaces/user.interface';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

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

		return this.http
			.post<{ user: IUser }>('https://tv-shows.infinum.academy/users/sign_in', data, { observe: 'response' })
			.pipe(
				tap((res) => {
					sessionStorage.setItem('access-token', res.headers.get('access-token') as string);
					sessionStorage.setItem('uid', res.headers.get('uid') as string);
					sessionStorage.setItem('client', res.headers.get('client') as string);
				}),
				map((res) => {
					return res.body?.user as IUser;
				}),
			);
	}

	public isLoggedIn(): boolean {
		return !!sessionStorage.getItem('userId');
	}

	public logOut() {
		sessionStorage.removeItem('userId');
		sessionStorage.removeItem('userEmail');
		sessionStorage.removeItem('access-token');
		sessionStorage.removeItem('uid');
		sessionStorage.removeItem('client');
	}
}
