import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Juego } from './juego';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  baseUrl = "http://localhost:8090/"

  constructor(
    private _http: HttpClient,
    private toastr: ToastrService
  ) { }
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  getJuegos(): Observable<Juego[]> {
    return this._http.get<Juego[]>(this.baseUrl + "juegos").pipe(
      catchError(e => {
        this.toastr.error(`Error al consultar los juegos: "${e.message}"`, e.statusText,{disableTimeOut:true,positionClass:'toast-top-full-width'});
        return throwError(e);
      })
    )
  }
  getJuego(id: number): Observable<Juego> {
    return this._http.get<Juego>(this.baseUrl + "juegos/" + id).pipe(
      catchError(e => {
        this.toastr.error(`Error al consultar el juego: "${e.message}"`, 'Error');
        return throwError(e);
      })
    )
  }
  addJuego(juego: Juego): Observable<Juego> {

    return this._http.post<Juego>(this.baseUrl + "juegos", juego, this.httpOptions).pipe(
      catchError(e => {
        this.toastr.error(`Error al añadir el juego: "${e.message}"`, 'Error');
        return throwError(e);
      }));
  }
  updateJuego(juego: Juego): Observable<Juego> {
    return this._http.put<Juego>(this.baseUrl + "juegos/" + juego.idJuego, juego, this.httpOptions).pipe(
      catchError(e => {
        this.toastr.error(`Error al actualizar el juego: "${e.message}"`, 'Error');
        return throwError(e);
      })
    );
  }

  deleteJuego(juego: Juego): Observable<Juego> {
    console.log(juego)
    return this._http.delete<Juego>(this.baseUrl + "juegos/" + juego.idJuego, this.httpOptions).pipe(
      catchError(e => {
        this.toastr.error(`Error al borrar el juego: "${e.message}"`, 'Error');
        return throwError(e);
      })
    );
  }

}
