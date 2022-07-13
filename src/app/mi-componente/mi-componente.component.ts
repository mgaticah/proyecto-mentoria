import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.scss']
})
export class MiComponenteComponent implements OnInit {

  constructor(
    private router: Router
  ) { }


  ngOnInit(): void {
  }
  navegar(){
   this.router.navigate(['/pagina2']);
  }
}
