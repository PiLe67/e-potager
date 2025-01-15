import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArduinoService {
  private baseUrl = 'http://192.168.210.207'; // Correct base URL of your Arduino

  constructor(private http: HttpClient) {}

  sendCommand(command: string): Observable<any> {
    // Set responseType to 'text' to handle plain text responses
    return this.http.get(`${this.baseUrl}/action?action=${command}`, { responseType: 'text' });
  }
}
