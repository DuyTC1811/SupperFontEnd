import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    return !!user;
  }
}
