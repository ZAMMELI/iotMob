// energy.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnergyService {
  private apiUrl = 'http://localhost:3000/api/energy';  // Your backend URL

  constructor(private http: HttpClient) {}

  // Fetch energy data from the backend
  getEnergyData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
