import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';
import { Paises } from '../paises';
import { PaisesService } from '../paises.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() pais: Paises | any;

  titulo: string = "Más información";

  constructor(private paisesService: PaisesService,
    public modalService: ModalService) { }

  ngOnInit(): void {
  }

  cerrarModal(){
    this.modalService.cerrarModal();
   
  }

}

