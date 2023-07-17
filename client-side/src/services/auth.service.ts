import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Login } from 'src/models/login';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) { }
  

  authenticate(user: Login): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/auth/login`, user, this.httpOptions);
  }

  register(user: Login): Observable<User> {
    console.log(user)
    return this.http.post<User>(`${environment.apiUrl}/auth/register`, user, this.httpOptions);
  }
}
