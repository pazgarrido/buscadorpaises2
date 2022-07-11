import { Component, Input, OnInit } from '@angular/core';
import { Paises } from '../paises/paises';
import { PaisesService } from '../paises/paises.service';
import { ParametrosService } from '../parametros.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() paises: Paises[] = [];
  paisesFiltrados: Paises[] = [];

   buscarporRegion = '';
   searchTerm = '';
   @Input() max:number= 0;
   @Input() min: number= 0;
   


  constructor(private paisesService: PaisesService,
    private serviceParam:ParametrosService) { }

  ngOnInit(): void {
    this.cargarAll();
  }

  cargarAll(): void{
    this.paisesService.getAllPaises().subscribe(paises => this.paises = paises);
  
  }

  search(value: string): void {
    this.paises = this.paisesFiltrados.filter((val) =>
      val.name.toLowerCase().includes(value)
    );
  }
  cambiamax(valor:any){
    this.serviceParam.updatedDataMax(valor);
    console.log(valor)
  }
  cambiamin(valor:any){
    this.serviceParam.updatedDataMin(valor);
     console.log('valor')
  }

 

}
