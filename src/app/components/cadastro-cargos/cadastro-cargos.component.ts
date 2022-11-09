import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-cargos',
  templateUrl: './cadastro-cargos.component.html'
})
export class CadastroCargosComponent implements OnInit {

  items: any = [];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Cargos'},
      {label: 'Pesquisar Cargos', routerLink: '/cargos'},
      {label: 'Cadastro de Cargos', routerLink: '/cargos/cadastro'},
    ];
  }

}
