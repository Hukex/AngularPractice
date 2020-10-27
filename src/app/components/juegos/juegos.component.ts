import { Component, OnInit } from '@angular/core';
import { Juego } from './juego';
import { trigger, style, animate, transition } from '@angular/animations';
import { JuegosService } from './juegos.service';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.sass'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ width: 0 }),
            animate('.1s ease-out',
              style({ width: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ width: 1 }),
            animate('.1s ease-in',
              style({ width: 0 }))
          ]
        )
      ]
    )
  ]
})
export class JuegosComponent implements OnInit {

  juegos: Juego[]
  showId = false

  constructor(
    private juegosService: JuegosService
  ) { }

  showOrHideID(): void {
    this.showId = !this.showId
  }

  ngOnInit(): void {
    this.juegosService.getJuegos().subscribe(
      data => this.juegos = data
    )
  }

}
