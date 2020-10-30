import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CompaniasService } from '../companias/companias.service';
import { Compania } from '../companias/compania';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { trigger, style, animate, transition } from '@angular/animations';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ height: 0, opacity: 0 }),
            animate('.4s ease-out',
              style({ height: 60, opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ height: 60, opacity: 1 }),
            animate('.4s ease-in',
              style({ height: 0 }))
          ]
        )
      ]
    )
  ]
})
export class LoginComponent implements OnInit {

  credentials: any = {}


  constructor(
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private loginService: LoginService

  ) { }

  ngOnInit(): void {

  }

  login(): void {
    this.loginService.save(this.credentials)
    this.router.navigate(['/companias'])

    console.log(this.credentials)
    // this.usuarioService.addJuego(this.usuario).subscribe(val => {
    //   (document.querySelector("#myForm") as HTMLFormElement).reset()
    //   this.toastr.success(`"${val.titulo}" se ha añadido correctamente en la base de datos`, 'Notificación');
    // })
  }
  

}
