import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Compania } from './compania';
@Injectable({
  providedIn: 'root'
})
export class CompaniasService {

  baseUrl = "http://localhost:8090/"

  constructor(
    private _http: HttpClient,
    private toastr: ToastrService
  ) { }

  getCompanies(): Observable<Compania[]> {
    return this._http.get<Compania[]>(this.baseUrl + "companies").pipe(
      catchError(e => {
        this.toastr.error(`Error al consultar las compañias: "${e.message}"`, e.statusText,{disableTimeOut:true,positionClass:'toast-top-full-width'});
        return throwError(e);
      })
    )
  }
}
