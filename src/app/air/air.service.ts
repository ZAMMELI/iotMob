import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface AirData {
  id: number;
  location: string;
  temperature: number;
  quality_air: number;
  last_updated: string;
}

@Injectable({
  providedIn: 'root',
})
export class AirService {
  private apiUrl = 'http://localhost:3000/api/air';

  constructor(private http: HttpClient) {}

  getAirData(): Observable<AirData[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<AirData[]>(this.apiUrl, { headers });
  }
}
