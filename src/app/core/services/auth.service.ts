import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { API_URL } from '../constants/API_URL'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = `${API_URL}/auth`
  constructor(
    private http: HttpClient
  ) { }

  public login(loginForm: any) {
    return lastValueFrom(this.http.post(this.baseUrl + "/login", {
      email: loginForm.logEmail,
      password: loginForm.logPassword
    }));
  }

  public register(registerForm: any) {
    return lastValueFrom(this.http.post(this.baseUrl + "/register", {
      email: registerForm.regEmail,
      password: registerForm.regPassword,
      fullName: registerForm.regFullName
    }))
  }




}
