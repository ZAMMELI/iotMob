import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  private baseUrl = 'http://localhost:3000/api';  // Make sure this matches your backend

  constructor(private http: HttpClient) {}

  // Fetch logs from the backend
  getLogs(): Observable<any> {
    return this.http.get(`${this.baseUrl}/history`);  // This should fetch the list of log files
  }
}
