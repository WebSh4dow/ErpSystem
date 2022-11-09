import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-grupos-de-caixas',
  templateUrl: './cadastro-grupos-de-caixas.component.html'
})
export class CadastroGruposDeCaixasComponent implements OnInit {

  items: any = [];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Grupos De Caixas '},
      {label: 'Pesquisar Grupos de Caixas', routerLink: '/grupos-de-caixas'},
      {label: 'Cadastro de Administradora de Cartões', routerLink: '/grupos-de-caixas/cadastro'},
    ];
  }

}
