import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Auth {
    loggedIn: boolean = false;

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }

    check() {
        return Observable.of(this.loggedIn);
    }
}