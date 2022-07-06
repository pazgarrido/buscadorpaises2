import { Component, OnInit, OnDestroy } from '@angular/core';
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

  buscarporRegion = '';
   
 
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
       console.log(response)
 
     });
   }
 
   abrirModal(pais: Paises){
     this.paisSeleccionado = pais;
     this.modalService.abrirModal();
     console.log(pais);
 
    }
 
 }
