import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-tipos-logradouros',
  templateUrl: './cadastro-tipos-logradouros.component.html'
})
export class CadastroTiposLogradourosComponent implements OnInit {

  items: any = [];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Tipos de Logradouros'},
      {label: 'Pesquisar Tipos de Logradouros', routerLink: '/tipos-logradouros'},
      {label: 'Cadastrar Tipos de Logradouros', routerLink: '/tipos-logradouros/cadastro'},
    ];
  }

}
