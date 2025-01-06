import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-energy',
  templateUrl: './energy.page.html',
  styleUrls: ['./energy.page.scss'],
})
export class EnergyPage implements OnInit {
  totalConsommation: number = 0;
  consommationData: any[] = []; // Array to hold energy data

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchEnergyData();
  }

  fetchEnergyData() {
    const token = localStorage.getItem('token'); // Get JWT token from localStorage
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    this.http.get('http://localhost:3000/api/energy', { headers }).subscribe(
      (response: any) => {
        this.consommationData = response.energyData;

        // Calculate total consumption
        this.totalConsommation = this.consommationData.reduce(
          (sum, item) => sum + item.consommation,
          0
        );
      },
      (error) => {
        console.error('Failed to fetch energy data.', error);
      }
    );
  }
}
