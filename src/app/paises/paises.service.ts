import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, filter } from 'rxjs';
import { Paises } from './paises';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private urlEndPoint: string = 'https://restcountries.com/v2/all';

  constructor(private http: HttpClient) { }

  getAllPaises(): Observable<Paises[]>{
    return this.http.get<Paises[]>(this.urlEndPoint);
  }

  //Filtrar por continente

 


}
