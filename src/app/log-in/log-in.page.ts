import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogInService } from './log-in.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage {
  userData = {
    email: '',
    password: '',
  };

  constructor(private loginService: LogInService, private router: Router) {}

  onLogin() {
    this.loginService.authenticate(this.userData).subscribe(
      (response) => {
        localStorage.setItem('token', response.token); // Store token
        alert('Login successful!');
        this.router.navigate(['/home']); // Redirect to home
      },
      (error) => {
        console.error('Login failed:', error);
        alert('Login failed. Please check your credentials.');
      }
    );
  }
}
