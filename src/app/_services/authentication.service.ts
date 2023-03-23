import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginRequest } from "../models/request/login-request";
import { RegisterRequest } from "../models/request/register-request";

const AUTHENTICATION_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<LoginRequest> {
    const requestBody = {username: username, password: password};
    return this.http.post<LoginRequest>(AUTHENTICATION_API + 'sign-in', requestBody, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<RegisterRequest> {
    const requestBody = {username: username, password: password, email: email};
    return this.http.post<RegisterRequest>(AUTHENTICATION_API + 'sing-up', requestBody, httpOptions);
  }

  logout(): Observable<any> {
    return this.http.post(AUTHENTICATION_API + 'sign-out', { }, httpOptions);
  }
}
