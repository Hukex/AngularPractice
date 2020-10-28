import { Component, OnInit } from '@angular/core';
import { Juego } from './juego';
import { FormControl } from '@angular/forms';
import { CompaniasService } from '../companias/companias.service';
import { JuegosService } from './juegos.service';
import { Compania } from '../companias/compania';
import { AlertService } from '../alert/alert.service';
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
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.companiaService.getCompanies().subscribe(
      data => this.opciones = data
    )
  }

  create(): void {
    this.juegoService.addJuego(this.juego).subscribe(val => {
      (document.querySelector("#myForm") as HTMLFormElement).reset()
      this.alertService.success(`"${val.titulo}" se ha añadido correctamente en la base de datos`, { autoClose: "true" });
    })
  }

}
