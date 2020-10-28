import { Component, OnInit } from '@angular/core';
import { Juego } from './juego';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  juego: Juego = new Juego()
  title: String = "Añadir Juego"

  constructor() { }

  ngOnInit(): void {
  }

  create():void{
    console.log(this.juego)
  }

}
