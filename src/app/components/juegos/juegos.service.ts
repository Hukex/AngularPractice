import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertService } from '../alert/alert.service';
import { Juego } from './juego';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  baseUrl = "http://localhost:8090/"

  constructor(
    private _http: HttpClient, private alertService: AlertService
  ) { }

  getJuegos(): Observable<Juego[]> {
    return this._http.get<Juego[]>(this.baseUrl + "juegos").pipe(
      catchError(e => {
        this.alertService.error(`Error al consultar los juegos: "${e.message}"`);
        return throwError(e);
      })
    )
  }

  addJuego(juego: Juego): Observable<Juego> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.post<Juego>(this.baseUrl + "juegos", JSON.stringify(juego), httpOptions).pipe(
      catchError(e => {
        this.alertService.error(`Error al añadir el juego: "${e.message}"`);
        return throwError(e);
      }));
  }
}
