import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recebimentos-configuracoes',
  templateUrl: './recebimentos-configuracoes.component.html',
  styleUrls: ['./recebimentos-configuracoes.component.scss']
})
export class RecebimentosConfiguracoesComponent implements OnInit {
  value: boolean = false;

  value1: boolean = false;

  value2: boolean = false;

  value3: boolean = false;

  value4:number

  value5:number
  
  constructor() { }

  ngOnInit(): void {
  }

}
