import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otro-componente',
  templateUrl: './otro-componente.component.html',
  styleUrls: ['./otro-componente.component.scss']
})
export class OtroComponenteComponent implements OnInit {
  mensajeParaInterno='mensaje de bienvenida definido en el controlador externo';
  counter=0;
  constructor() { }

  ngOnInit(): void {
  }
  decreaseCounter(){
    this.counter--;
  }
  increaseCounter(){
    this.counter++;
  }

}
