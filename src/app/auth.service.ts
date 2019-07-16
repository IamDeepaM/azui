import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AppService } from './app.service';

@Injectable()
export class AuthService implements CanActivate {

    constructor(
        public router: Router,
        private appService: AppService
    ) { }

    canActivate(): boolean {
        const vm = this;
        if (!vm.appService.userObj || !vm.appService.userObj.isAdmin) {
            vm.router.navigate(['login']);
            return false;
        }
        return true;
    }
}
