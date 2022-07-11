import { Pipe, PipeTransform } from '@angular/core';
import { ParametrosService } from '../parametros.service';

@Pipe({
  name: 'callback',
  pure: false
})
export class CallbackPipe implements PipeTransform {

  constructor(private service:ParametrosService) {  }
  transform(items: any[], callback: (item: any,max:number,min:number) => boolean): any {
    let max:number;
    let min:number;
  this.service.maxi.subscribe((valor:number)=>max=valor);
  this.service.mini.subscribe((valor:number)=>min=valor);
    if (!items || !callback) {
        return items;
    }
    return items.filter(item =>
      callback(item,max,min))
    }

}
