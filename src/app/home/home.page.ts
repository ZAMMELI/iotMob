import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';  // Import Geolocation API from Capacitor
import { WeatherService } from './weather.service';
import { Chart } from 'chart.js/auto';  // Import Chart.js

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  weatherData: any;
  latitude: number = 0;
  longitude: number = 0;

  constructor(private router: Router, private weatherService: WeatherService) {}

  ngOnInit() {
    this.getLocation();
  }

  // Function to get the current location of the user
  async getLocation() {
    try {
      const position = await Geolocation.getCurrentPosition();
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      console.log('Location:', this.latitude, this.longitude);

      // Now fetch the weather data
      this.getWeatherData(this.latitude, this.longitude);
    } catch (error) {
      console.error('Error getting location', error);
    }
  }

  // Function to fetch weather data based on latitude and longitude
  getWeatherData(lat: number, lon: number) {
    this.weatherService.getWeatherByCoordinates(lat, lon).subscribe(
      (data) => {
        this.weatherData = data;
        console.log('Weather Data:', this.weatherData);
      },
      (error) => {
        console.error('Error fetching weather data', error);
      }
    );
  }


  // Function to navigate to different pages
  goToPage(route: string) {
    this.router.navigate([`/${route}`]).then(success => {
      console.log('Navigation Success:', success);
    }).catch(error => {
      console.error('Navigation Failed:', error);
    });
  }

  // Handle item click to navigate to specific pages
  onItemClick(item: string) {
    console.log('Item clicked:', item);
    this.router.navigate([`/${item}`]).then(success => {
      console.log('Navigation Success:', success);
    }).catch(error => {
      console.error('Navigation Failed:', error);
    });
  }

}
