import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from 'app/services/show-services/auth/auth.service';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class AnonymousGuard implements CanActivate {
	constructor(private readonly authService: AuthService, private readonly router: Router) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot,
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		if (!sessionStorage.getItem('userId')) {
			return true;
		} else {
			return this.router.navigate(['']);
		}
	}
}
