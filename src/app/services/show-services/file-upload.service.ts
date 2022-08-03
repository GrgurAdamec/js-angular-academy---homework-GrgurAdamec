import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ILoginFormData } from 'app/Interfaces/login-form-data.interface';
import { IRegisterFormData } from 'app/Interfaces/register-form-data.interface';
import { IUser } from 'app/Interfaces/user.interface';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class FileUploadService {
	constructor(private readonly http: HttpClient) {}

	public headers = new HttpHeaders()
		.set('client', sessionStorage.getItem('client') as string)
		.set('access-token', sessionStorage.getItem('access-token') as string)
		.set('uid', sessionStorage.getItem('uid') as string);

	public uploadFile(file: File): Observable<any> {
		const formData = new FormData();
		formData.append('image', file);

		return this.http.put('https://tv-shows.infinum.academy/users', formData, { headers: this.headers });
	}
}
