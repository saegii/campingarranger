import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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
    this.authService.checkAuthorization(this.mapLoginUser()).subscribe(
      authorized => {
        if (authorized) {
          console.log('User is authorized to log in');
          localStorage.setItem('isLoggedIn', 'true');
          this.router.navigate(['/dashboard']);
        } else {
          this.showSnackbar('Incorrect email or password');
        }
      },
      error => {
        console.error('Error occurred during authorization check:', error);
        this.showSnackbar('An error occurred during authorization check');
      }
    );
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
