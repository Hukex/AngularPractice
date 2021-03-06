import { Component, OnInit } from '@angular/core';
import { Juego } from './juego';
import { trigger, style, animate, transition } from '@angular/animations';
import { JuegosService } from './juegos.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import {  ConfirmDialogComponent } from '../dialog/confirm-dialog/confirm-dialog.component'

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
              style({ width: 60 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ width: 60 }),
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
  showSpinner = true
  showId = false
  constructor(
    private juegoService: JuegosService,
    private toastr: ToastrService,
    public dialog: MatDialog
  ) { }

  showOrHideID(): void {
    this.showId = !this.showId
  }

  ngOnInit(): void {
    this.loadGames()
  }
  delete(id: number,titulo: String): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{data: {
      id: id,
      titulo: titulo
    }});
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.juegoService.getJuego(id).subscribe(data => {
          this.juegoService.deleteJuego(data).subscribe(val => {
            this.toastr.info(`"${data.titulo}" se ha borrado correctamente de la base de datos`, 'Notificación');
            this.loadGames()
          })
        })
      }
    });
  }
  loadGames(): void {
    this.juegoService.getJuegos().subscribe(
      data => this.juegos = data,
      err => err ? this.showSpinner = false : ''
    )
  }
}