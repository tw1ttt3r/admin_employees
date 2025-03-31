import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import u from '@models/user';
import { user } from '@dummy/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private logged: boolean = false;
  private userInfo: u = user

  private _loggedStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.logged);
  private _user: BehaviorSubject<u> = new BehaviorSubject<u>(this.userInfo);

  setLoggedStatus(status: boolean) {
    this.logged = status;
    this.emitLogged();
  }

  emitLogged() {
    this._loggedStatus.next(this.logged);
  }

  emitUser() {
    this._user.next(this.userInfo);
  }

  getLoggedStatus(): Observable<boolean> {
    return this._loggedStatus.asObservable();
  }

  setUserInfo(user: any) {
    this.userInfo = user;
    this.emitUser();
  }

  getUser() {
    return this._user.asObservable();
  }
}
