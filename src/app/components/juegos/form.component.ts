import { Component, OnInit } from '@angular/core';
import { Juego } from './juego';
import { FormControl } from '@angular/forms';
import { CompaniasService } from '../companias/companias.service';
import { JuegosService } from './juegos.service';
import { Compania } from '../companias/compania';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  juego: Juego = new Juego()
  title: String = "Añadir Juego"
  toppings = new FormControl()
  opciones: Compania[]
  enums: String[] = ["SHOOTER", "MOBA", "RPG", "MMORPG", "ROGUELIKE", "METROIDVANIA"]


  constructor(
    private companiaService: CompaniasService,
    private juegoService: JuegosService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.companiaService.getCompanies().subscribe(
      data => this.opciones = data
    )
    this.activatedRoute.params.subscribe(params => {
      let id = params["id"]
      if (id) {
        this.juegoService.getJuego(id).subscribe(data => this.juego = data)
        this.title = "Editar Juego"
      }
    })
  }

  create(): void {
    this.juegoService.addJuego(this.juego).subscribe(val => {
      (document.querySelector("#myForm") as HTMLFormElement).reset()
      this.toastr.success(`"${val.titulo}" se ha añadido correctamente en la base de datos`, 'Notificación');
    })
  }
  update(): void {
    this.juegoService.updateJuego(this.juego).subscribe(val => {
      this.router.navigate(['/juegos'])
      this.toastr.success(`"${val.titulo}" se ha editado correctamente en la base de datos`, 'Notificación');
    })
  }

  compareCompany(companyToCompare: Compania, companySelected: Compania) {
    if (!companyToCompare || !companySelected) {
      return false;
    }
    return companyToCompare.idCompany === companySelected.idCompany;
  }

}
