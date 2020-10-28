import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { AlertService } from '../alert/alert.service';
import { Juego } from './juego';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  baseUrl = "http://localhost:8090/"

  constructor(
    private _http: HttpClient,private alertService: AlertService
  ) { }

  getJuegos(): Observable<Juego[]> {
    return this._http.get<Juego[]>(this.baseUrl + "juegos").pipe(
      catchError(e=>{
        this.alertService.error(`Error al consultar los juegos: "${e.message}"`);
        return throwError(e);
      })
    )
  }
}
