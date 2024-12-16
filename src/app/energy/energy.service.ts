import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EnergyService {
  private apiUrl = 'https://your-server.com/api/energy-metrics'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getEnergyMetrics(): Observable<{ location: string; usage: number }[]> {
    return this.http.get<{ location: string; usage: number }[]>(this.apiUrl);
  }
}


