import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogInService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  authenticate(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, userData);
  }
}
