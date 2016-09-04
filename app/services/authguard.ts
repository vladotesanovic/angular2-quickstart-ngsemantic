import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from './auth';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";

@Injectable()
export class AuthGuard {
    constructor(private router: Router, private auth: Auth) {}

    canActivate(): Observable<boolean> {
        return this.auth.check()
            .map((result: boolean) => {
                if (!result) {
                    this.router.navigate(['/']);
                }
                return result;
            });
    }
}