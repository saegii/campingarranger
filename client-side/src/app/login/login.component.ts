import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Login } from 'src/models/login';
import { User } from 'src/models/user';
import { AuthService } from 'src/services/auth.service';
import { MessagingService } from 'src/services/messaging.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  email = '';
  password = '';

  constructor(
    private router: Router, 
    private authService: AuthService, 
    private messagingService: MessagingService
  ) {}

  ngOnInit() {}

  signUp() {
    this.authService.register(this.mapLoginUser())
    .pipe(
      catchError((error: HttpErrorResponse) => {
        return this.messagingService.handleRequestError(error);
      })
    )
    .subscribe((user: User) => {
      if (user.id) {
        localStorage.setItem('userId', user.id);
        localStorage.setItem('isLoggedIn', 'true');
        this.router.navigate(['/dashboard']);
        this.messagingService.showError('New user created.');
      } else {
        this.messagingService.showError('User got created but is not authorized, try again.');
      }
    })
  }

  signIn() {
    this.authService.authenticate(this.mapLoginUser())
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return this.messagingService.handleRequestError(error);
        })
      )
      .subscribe((user: User) => {
        if (user.id) {
          localStorage.setItem('userId', user.id);
          localStorage.setItem('isLoggedIn', 'true');
          this.router.navigate(['/dashboard']);
        } else {
          this.messagingService.showError('Wrong email or password.');
        }
      })
  }

  mapLoginUser(): Login {
    return {
      email: this.email,
      password: this.password,
    } as Login;
  }

}
