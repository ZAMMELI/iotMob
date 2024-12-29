import { Component } from '@angular/core';
import { LogInService } from './log-in.service';
import { Router } from '@angular/router';  // Import Router for navigation

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

  constructor(
    private logInService: LogInService,
    private router: Router  // Inject Router into the constructor
  ) {}

  onLogin() {
    this.logInService.loginUser(this.userData).subscribe(
      (response) => {
        console.log('Login successful:', response);
        alert('Login successful!');
        // Navigate to home or dashboard page
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Error during login:', error);
        alert('Login failed. Please try again.');
      }
    );
  }
}
