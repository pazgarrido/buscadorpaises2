import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarRegion'
})
export class BuscarRegionPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const buscarporregion = [];
    for (const recorrido of value) {
      if(recorrido.region.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        buscarporregion.push(recorrido);
      }
    }
    return buscarporregion;
  } 

}
