import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaDatosService {

  constructor(
    private http:HttpClient
  ) { }
  obtieneDatos( id:number ){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/'+id);
  }


}
