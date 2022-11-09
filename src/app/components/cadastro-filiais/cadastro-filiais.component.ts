import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-filiais',
  templateUrl: './cadastro-filiais.component.html'
})
export class CadastroFiliaisComponent implements OnInit {

  items: any = [];

  filiais: any = [];

  selectFiliais: any[];

  selectStatus: any[];

  value1: string = "sim";
  
  value2:string = "ativo";

  constructor() {
    this.filiais,
    this.selectFiliais = [{label:'Sim',value:'sim'},{label:'Não',value:'nao'}]
    this.selectStatus = [{label:'Ativo',value:'ativo'},{label:'Inativo',value:'inativo'}]
}

  ngOnInit(): void {
    this.items = [
      {label: 'Filiais'},
      {label: 'Pesquisar Filiais', routerLink: '/filiais'},
      {label: 'Cadastro Filiais', routerLink: '/filiais/cadastro'},
    ];
  }

}
