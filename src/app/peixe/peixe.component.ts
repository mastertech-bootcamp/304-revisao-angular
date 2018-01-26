import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-peixe',
  templateUrl: './peixe.component.html',
  styleUrls: ['./peixe.component.css']
})
export class PeixeComponent implements OnInit {
  @Input() topo;
  @Input() esquerda;

  constructor() { }

  ngOnInit() {
  }

}
