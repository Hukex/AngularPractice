import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Juego } from './juego';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  constructor(
    private _http: HttpClient
  ) { }

  getJuegos(): Observable<Juego[]> {
    return this._http.get<Juego[]>("http://localhost:8090/juegos")
  }
}
