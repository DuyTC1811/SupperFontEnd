import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginRequest } from "../models/request/login-request";

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
    return this.http.post<LoginRequest>(AUTHENTICATION_API + 'login', requestBody, httpOptions);
  }
}
