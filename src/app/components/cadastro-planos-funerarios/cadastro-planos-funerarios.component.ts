import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-planos-funerarios',
  templateUrl: './cadastro-planos-funerarios.component.html'
})
export class CadastroPlanosFunerariosComponent implements OnInit {
  tipo: any = [];

  status: any = [];

  escolha:any = [];

  cobranca:any= [];

  items: any = [];

  value = 0;

  constructor() {

  this.tipo.push({name:'Pessoa Física', value: 0});
  this.tipo.push({name:'Empresarial', value: 1});
  this.tipo.push({name:'Setor Público', value: 2});

  this.status.push({name:'ATIVO', value: 0});
  this.status.push({name:'INATIVO', value: 1});

  this.escolha.push({name:'SIM', value: 0});
  this.escolha.push({name:'NÃO', value: 1});


  this.cobranca.push({name:'MENSAL', value: 0});
  this.cobranca.push({name:'BIMESTRAL', value: 1});
  this.cobranca.push({name:'TRIMESTRAL', value: 2});
  this.cobranca.push({name:'SEMESTRAL', value: 3});
  this.cobranca.push({name:'ANUAL', value: 4});


   }

   ngOnInit(): void {
    this.items = [
      {label: 'Planos Funerários'},
      {label: 'Pesquisar Planos Funerários', routerLink: '/planos-funerarios'},
      {label: 'Cadastrar Planos Funerários', routerLink: '/planos-funerarios/cadastro'},
    ];
  }

}
