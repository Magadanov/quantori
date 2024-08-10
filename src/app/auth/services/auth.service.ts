import { Injectable } from '@angular/core';
import { DummyLogin, UserInfo } from '../models/auth.model';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private COOKIE_EXPIRE_HOUR = 1;

  private urlPrefix = 'https://dummyjson.com/auth/';
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router
  ) {}

  setToken(token: string) {
    this.cookieService.set('token', token, this.COOKIE_EXPIRE_HOUR, '/');
  }

  getToken() {
    return this.cookieService.get('token');
  }

  isLoggedIn(): boolean {
    return !!this.cookieService.get('token');
  }

  login() {
    const userInfo: UserInfo = {
      username: 'emilys',
      password: 'emilyspass',
    };
    this.http.post<DummyLogin>(`${this.urlPrefix}login`, userInfo).subscribe({
      next: (response) => {
        this.setToken(response.token);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Login failed', err);
      },
    });
  }

  logout() {
    this.cookieService.delete('token', '/');
    this.router.navigate(['/auth/login']);
  }
}
