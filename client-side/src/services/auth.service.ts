import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { LoginUser } from 'src/models/login-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/v1/api'; 

  constructor(private http: HttpClient) { }

  checkAuthorization(user: LoginUser): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/check-authorization`, user);
  }
}
