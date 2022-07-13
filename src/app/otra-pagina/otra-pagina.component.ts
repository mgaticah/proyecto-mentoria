import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultaDatosService } from '../services/consulta-datos.service';

@Component({
  selector: 'app-otra-pagina',
  templateUrl: './otra-pagina.component.html',
  styleUrls: ['./otra-pagina.component.scss']
})
export class OtraPaginaComponent implements OnInit {
  argumento: number;
  datosObtenidos:any;
  constructor(
    private rutaActual: ActivatedRoute,
    private servicioDatos:ConsultaDatosService
  ) {
    this.rutaActual.params.subscribe(params => {
      this.argumento = params['elargumento'];
      if(this.argumento){
        this.servicioDatos.obtieneDatos(this.argumento).subscribe( result=>{
          this.datosObtenidos=result;
         });
      }
    });



  }


  ngOnInit(): void {
  }

}
