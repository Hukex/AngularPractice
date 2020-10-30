import { Component, OnInit } from '@angular/core';
import { Compania } from './compania';
import { CompaniasService } from './companias.service';
import { trigger, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-companias',
  templateUrl: './companias.component.html',
  styleUrls: ['./companias.component.sass'],
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
export class CompaniasComponent implements OnInit {

  constructor(private companiaService: CompaniasService) { }

  companies: Compania[]
  showId = true
  showSpinner = true

  ngOnInit(): void {
    this.companiaService.getCompanies().subscribe(
      data => this.companies = data,
      err => err ? this.showSpinner = false : ''
    )
  }

  showOrHideID(): void {
    this.showId = !this.showId
  }

}
