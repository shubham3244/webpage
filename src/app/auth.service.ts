import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  onLogin(data: any): Observable<any> {
    return this.http.post('http://116.68.244.225:3000/api/admin/admin-login', data)
  }
  getToken() {
    return localStorage.getItem('Token')
  }
}
