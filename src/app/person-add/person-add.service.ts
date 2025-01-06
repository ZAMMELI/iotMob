import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonAddService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  registerUser(userData: any): Observable<any> {
    console.log('Sending user data:', userData); // Log user data to check before sending
    return this.http.post(`${this.baseUrl}/signup`, userData);
  }

}
