import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenarRegion'
})
export class OrdenarRegionPipe implements PipeTransform {

  transform(value: any): any {
    return value.sort((a: any, b: any) =>{
      if (a.region < b.region) {
        return -1;
      }
      if (a.region > b.region) {
        return 1;
      }
        return 0;
    })
  }


}
