import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-departamentos',
  templateUrl: './cadastro-departamentos.component.html'
})
export class CadastroDepartamentosComponent implements OnInit {

  items: any = [];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Departamentos'},
      {label: 'Pesquisar Departamentos', routerLink: '/departamentos'},
      {label: 'Cadastro de Departamentos ', routerLink: '/departamentos/cadastro'},
    ];
  }

}
