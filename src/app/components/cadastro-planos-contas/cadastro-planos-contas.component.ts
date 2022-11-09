import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-planos-contas',
  templateUrl: './cadastro-planos-contas.component.html'
})
export class CadastroPlanosContasComponent implements OnInit {

  items: any = [];
  nivel: any = [];
  tipo: any = [];
  value1:string = "ativo";
  selectStatus: any [];
  
  constructor() {
    this.nivel.push({name:'GRUPO', value: 0});
    this.nivel.push({name:'SUBGRUPO', value: 1});
    this.nivel.push({name:'CONTA', value: 2});

    this.tipo.push({name:'0-RENDIMENTOS', value: 0});
    this.tipo.push({name:'1-FORNECEDOR', value: 1});
    this.tipo.push({name:'2-CUSTO FIXO', value: 2});
    this.tipo.push({name:'3-CUSTO VARIÁVEL', value: 3});

    this.selectStatus = [{label:'Ativo',value:'ativo'},{label:'Inativo',value:'inativo'}]


    

}

  ngOnInit(): void {
    this.items = [
      {label: 'Planos De Contas'},
      {label: 'Pesquisar Planos de Contas', routerLink: '/planos-de-contas'},
      {label: 'Cadastrar Planos de Contas', routerLink: '/planos-de-contas/cadastro'},
    ];
  }

}
