import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-number',
  templateUrl: './show-number.component.html',
  styleUrls: ['./show-number.component.scss']
})
export class ShowNumberComponent implements OnInit {
  @Input() numberToShow: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
