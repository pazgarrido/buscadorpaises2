import { Component, Input, OnInit } from '@angular/core';
import { Paises } from '../paises/paises';
import { PaisesService } from '../paises/paises.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() paises: Paises[] = [];

   buscarporRegion = '';

  constructor(private paisesService: PaisesService) { }

  ngOnInit(): void {
    this.cargarAll();
  }

  cargarAll(): void{
    this.paisesService.getAllPaises().subscribe(paises => this.paises = paises);
  
  }

}
