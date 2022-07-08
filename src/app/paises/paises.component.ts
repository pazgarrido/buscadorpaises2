import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ModalService } from './modal.service';
import { Paises } from './paises';
import { PaisesService } from './paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnDestroy, OnInit {


  paises: Paises[] = [];
  paisSeleccionado: Paises | any;

  @Input() buscarporRegion = '';
  @Input() searchTerm = '';

  totalPaginas!: number;
  page: number = 1;
   
 
   constructor(private paisesService: PaisesService,
     private modalService: ModalService) { }
 
   ngOnInit(): void {
 
     this.getPaises();
   }
 
   ngOnDestroy(): void {
   
   }
 
   getPaises(){
     this.paisesService.getAllPaises().subscribe((response) =>{
       this.paises = response;
       this.totalPaginas = response.length;
       this.totalPaginas = this.buscarporRegion.length;
       this.totalPaginas = this.searchTerm.length;
       console.log(response)
 
     });
   }
 
   abrirModal(pais: Paises){
     this.paisSeleccionado = pais;
     this.modalService.abrirModal();
     console.log(pais);
 
    }
 
 }
