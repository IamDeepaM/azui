import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  user: any;

  get userObj(): any {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    return this.user;
  }

  set userObj(value: any) {
    this.user = value;
    sessionStorage.setItem('user', JSON.stringify(this.user));
  }
}
