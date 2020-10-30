import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginService } from '../login/login.service';
import { Compania } from './compania';
@Injectable({
  providedIn: 'root'
})
export class CompaniasService {

  baseUrl = "http://localhost:8090/"

  constructor(
    private _http: HttpClient,
    private toastr: ToastrService,
    private router: Router,
    private loginService: LoginService

  ) { }

  getCompanies(): Observable<Compania[]> {
    return this._http.get<Compania[]>(this.baseUrl + "companies",{headers: this.loginService.getAuthHeaders()}).pipe(
      catchError(e => {
        if (e.status == 401) {
          this.router.navigate(['/login'])
        } else {
          this.toastr.error(`Error al consultar las compañias: "${e.message}"`, e.statusText,{disableTimeOut:true,positionClass:'toast-top-full-width'});
        }
        return throwError(e);
      })
    )
  }
}
