import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-cidades',
  templateUrl: './cadastro-cidades.component.html'
})
export class CadastroCidadesComponent implements OnInit {

  items: any = [];
  tipo: any = [];

  
  constructor() {
    this.tipo.push({name:'ACRE', value: 0});
    this.tipo.push({name:'ALAGOAS', value: 1});
    this.tipo.push({name:'BAHIA', value: 2});
}

  ngOnInit(): void {
    this.items = [
      {label: 'Cidades'},
      {label: 'Pesquisar de Cidades', routerLink: '/cidades'},
      {label: 'Cadastro de Cidades', routerLink: '/cidades/cadastro'},
    ];
  }

}
