import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { catchError, throwError } from 'rxjs';
import { Login } from 'src/models/login';
import { User } from 'src/models/user';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  email = '';
  password = '';

  constructor(private router: Router, private authService: AuthService, private messageService: MessageService) {}

  ngOnInit() {}

  signUp() {
    this.authService.register(this.mapLoginUser())
    .pipe(
      catchError((error: HttpErrorResponse) => {
        return this.handleError(error);
      })
    )
    .subscribe((user: User) => {
      if (user.id) {
        localStorage.setItem('userId', user.id);
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
      .subscribe((user: User) => {
        if (user.id) {
          localStorage.setItem('userId', user.id);
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

  mapLoginUser(): Login {
    return {
      email: this.email,
      password: this.password,
    } as Login;
  }

  showSnackbar(message: string) {
    this.messageService.add({ severity: 'info', summary: 'Snackbar Message', detail: 'This is a snackbar-like message.' });
  }

}
