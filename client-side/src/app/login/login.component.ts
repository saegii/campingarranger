import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { LoginResponse } from 'src/models/login-response';
import { LoginUser } from 'src/models/login-user';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  email = '';
  password = '';

  constructor(private router: Router, private authService: AuthService, private snackBar: MatSnackBar) {}

  ngOnInit() {}

  signUp() {
    console.log('Signing up with email:', this.email);
    localStorage.setItem('isLoggedIn', 'true');
    // service sign up
  }

  signIn() {
    console.log('Signing in with email:', this.email);
    const user = this.mapLoginUser();
    console.log(user);
    this.authService.authenticate(user)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.log('An error occurred:', error.message);
          return throwError('Something went wrong.');
        })
      )
      .subscribe((response: LoginResponse) => {
        console.log('Response:', response);
        if (response.authorized) {
          localStorage.setItem('isLoggedIn', 'true');
          this.router.navigate(['/dashboard']);
        } else {
          this.showSnackbar('Not authorized user, register new account.');
        }
      })
  }

  mapLoginUser(): LoginUser {
    return {
      email: this.email,
      password: this.password,
    } as LoginUser;
  }

  showSnackbar(message: string) {
    this.snackBar.open(message, 'X', {
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

}
