import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Plant } from './plant';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = '/api'; // Revert to use the proxy configuration
  private http = inject(HttpClient);
  private privateToken = import.meta.env.NGX_API_KEY;

  getAuthToken() { 
    const params = {
      origin: 'localhost:4200',
      ip: '',
      token: this.privateToken
    };
    return this.http.post<any>(`${this.apiUrl}/auth/claim`, params, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  getData(plant_name: any, token: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/&filter%5Bcommon_name%5D=${plant_name}?token=${token}`);
  }

  //postData(payload: any): Observable<any> {
  //  return this.http.post<any>(`${this.apiUrl}/data`, payload);
  //}
}