import { Component } from '@angular/core';
import { PersonAddService } from './person-add.service';
import { Router } from '@angular/router';  // Import Router

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.page.html',
  styleUrls: ['./person-add.page.scss'],
})
export class PersonAddPage {
  userData = {
    username: '',
    email: '',
    password: '',
  };

  constructor(
    private personAddService: PersonAddService,
    private router: Router  // Inject Router into the constructor
  ) {}

  onSignup() {
    this.personAddService.registerUser(this.userData).subscribe(
      (response) => {
        console.log('Signup successful:', response);
        alert('Signup successful!');
        this.router.navigate(['/home']);// Navigate to home page after successful signup
        
        // Clear the form fields after successful signup
        this.userData = {
          username: '',
          email: '',
          password: '',
        };
      },
      (error) => {
        console.error('Error during signup:', error);
        alert('Signup failed. Please try again.');
      }
    );
  }
}
