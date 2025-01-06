import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-air',
  templateUrl: './air.page.html',
  styleUrls: ['./air.page.scss'],
})
export class AirPage implements OnInit {
  airData: any[] = [];  // Declare airData as an array
  isAuthenticated: boolean = false;  // Flag to check authentication

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.checkAuthentication();
    this.fetchAirData();
  }

  // Check if the user is authenticated (based on localStorage token)
  checkAuthentication() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.isAuthenticated = false;
      this.router.navigate(['/log-in']);
    } else {
      this.isAuthenticated = true;
    }
  }

  // Fetch air data from the API
  fetchAirData() {
    const token = localStorage.getItem('token');
    if (!token) {
      return;
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    this.http.get<{ airData: any[] }>('http://localhost:3000/api/air', { headers }).subscribe(
      (response) => {
        console.log('Air Data:', response);
        this.airData = response.airData;  // Correctly assign airData from the response
      },
      (error) => {
        console.error('Error fetching air data:', error);
      }
    );
  }
}
