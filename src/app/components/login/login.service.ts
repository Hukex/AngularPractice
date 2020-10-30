import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  save(credentials: any): void {
    localStorage.setItem('token', btoa(`${credentials.username}:${credentials.password}`))
  }


  getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({ 'Authorization': 'Basic ' + localStorage.getItem('token') })
  }
}
