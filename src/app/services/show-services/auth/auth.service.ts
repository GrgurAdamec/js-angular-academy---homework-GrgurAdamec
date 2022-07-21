import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAuthFormData } from 'app/Interfaces/auth-form-data.interface';
import { IUser } from 'app/Interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(private readonly http: HttpClient) {}

	public register(data: IAuthFormData): Observable<IUser> {
		console.log(data);
		return this.http.post<IUser>('https://tv-shows.infinum.academy/users', data);
	}

	public login(data: IAuthFormData): Observable<IUser> {
		console.log(data);
		return this.http.post<IUser>('https://tv-shows.infinum.academy/sign_in', data);
	}
}
