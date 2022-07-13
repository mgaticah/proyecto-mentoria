import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-interno',
  templateUrl: './interno.component.html',
  styleUrls: ['./interno.component.scss']
})
export class InternoComponent implements OnInit {
  @Input() mensajeExterno: string;
  mensaje='mensaje de bienvenida definido en el controlador';

  constructor() { }

  ngOnInit(): void {
  }

}
