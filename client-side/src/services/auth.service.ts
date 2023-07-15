import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Login } from 'src/models/login';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/v1/api/auth'; 
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) { }
  

  authenticate(user: Login): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/login`, user, this.httpOptions);
  }

  register(user: Login): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/register`, user, this.httpOptions);
  }
}
