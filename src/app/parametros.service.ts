import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParametrosService {

  //le damos un valor inicial
  maxBs = new BehaviorSubject<number>(2000000000);
  minBs = new BehaviorSubject<number>(0);
// permitimos la subscripcion a el mediante
  maxi = this.maxBs.asObservable()
  mini = this.minBs.asObservable()

  constructor() { 
    

  }
  // enviamos los ultimos valores
  updatedDataMax(data: number) {
    this.maxBs.next(data);
  }
  updatedDataMin(data: number) {
    this.minBs.next(data);
  }
}
