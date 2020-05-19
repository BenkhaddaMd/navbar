import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';



const AUTH_API = 'http://dev.devarchi.fr:8080/domotic/cxf/app/login';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'user';
export const ROLE = 'role'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    let url = AUTH_API + 'login';
      url += '?username=' + credentials.username;
      url += '&password=' + credentials.password;

    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

  return this.http.post(url, null,{ headers, withCredentials: true });
  }

  saveUser(user: User) {
    localStorage.setItem(AUTHENTICATED_USER, JSON.stringify(user));
  }

  getUser(){
    return JSON.parse(localStorage.getItem(AUTHENTICATED_USER));
  }
  clearUser(){
    debugger;
    localStorage.removeItem(AUTHENTICATED_USER);
  }
  isUserLoggedIn() {
    let user = this.getUser();
    debugger
    return !!user;
  }

  logout(){
    const url = AUTH_API + 'logout';
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(url, null, { headers, observe: 'response' });
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      login: user.username,
      email: user.email,
      password: user.password,
      firstname: user.firstname,
      name: user.name
    }, httpOptions);
  }
}
