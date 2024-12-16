import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = 'abc123xyz456';  // Get your API key from https://openweathermap.org/api
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=abc123xyz456&units=metric';

  constructor(private http: HttpClient) {}

  // Function to get weather data by coordinates (latitude and longitude)
  getWeatherByCoordinates(lat: number, lon: number): Observable<any> {
    const url = `${this.apiUrl}?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`;  // Metric units for Celsius
    return this.http.get<any>(url);
  }
}
