import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-configuracoes',
  templateUrl: './cliente-configuracoes.component.html',
  styleUrls: ['./cliente-configuracoes.component.scss']
})
export class ClienteConfiguracoesComponent implements OnInit {
  value: boolean = false;
  value1: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
