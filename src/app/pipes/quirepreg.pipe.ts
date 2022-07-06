import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quirepreg'
})
export class QuirepregPipe implements PipeTransform {

  transform(value: any): any {
    return value.filter((value: any, i: any, arr: any) => arr.findIndex((data:any) => data.region === value.region)=== i);
  }

}
