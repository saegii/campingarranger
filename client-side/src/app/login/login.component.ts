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
    this.authService.register(this.mapLoginUser())
    .pipe(
      catchError((error: HttpErrorResponse) => {
        return this.handleError(error);
      })
    )
    .subscribe((response: LoginResponse) => {
      if (response.authorized) {
        localStorage.setItem('isLoggedIn', 'true');
        this.router.navigate(['/dashboard']);
        this.showSnackbar('New user created.');
      } else {
        this.showSnackbar('User got created but is not authorized, try again.');
      }
    })
  }

  signIn() {
    this.authService.authenticate(this.mapLoginUser())
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return this.handleError(error);
        })
      )
      .subscribe((response: LoginResponse) => {
        if (response.authorized) {
          localStorage.setItem('isLoggedIn', 'true');
          this.router.navigate(['/dashboard']);
        } else {
          this.showSnackbar('Wrong email or password.');
        }
      })
  }

  handleError(error: HttpErrorResponse) {
    console.log('An error occurred:', error);
    this.showSnackbar(error.error);
    return throwError('Something went wrong.');
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
