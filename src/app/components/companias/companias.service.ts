import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertService } from '../alert/alert.service';
import { Compania } from './compania';
@Injectable({
  providedIn: 'root'
})
export class CompaniasService {

  baseUrl = "http://localhost:8090/"

  constructor(
    private _http: HttpClient,private alertService: AlertService

  ) { }
  
  getCompanies(): Observable<Compania[]> {
    return this._http.get<Compania[]>(this.baseUrl + "companies").pipe(
      catchError(e=>{
        this.alertService.error(`Error al consultar las compañias: "${e.message}"`);
        return throwError(e);
      })
    )
  }
}
