import { Injectable } from '@angular/core';
import { Route, CanLoad,  CanActivate,  ActivatedRouteSnapshot,  RouterStateSnapshot,  Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserProfileService } from './service/user-profile.service';

@Injectable()
export class AuthGuard implements CanActivate {
  // isLogin = false;

  constructor(private router: Router,
    private userProfileService: UserProfileService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.userProfileService.isLogin) {
      this.router.navigate(['./login']);
    }

    return this.userProfileService.isLogin;
  }

}
