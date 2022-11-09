import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-indices',
  templateUrl: './cadastro-indices.component.html'
})
export class CadastroIndicesComponent implements OnInit {
  tipo: any = [];

  uso: any = [];

  modelo: any = [];

  items: any = [];

  value2: number = 0;

  constructor() { 

  this.tipo.push({name:'NORMAL', value: 0});
  this.tipo.push({name:'PERSONALIZADO', value: 1});
  

  this.uso.push({name:'NORMAL', value: 0});
  this.uso.push({name:'CONCESSÃO', value: 1});
  this.uso.push({name:'MANUNTENÇÃO', value: 2});
  this.uso.push({name:'SEGURO DE VIDA', value: 3});
  this.uso.push({name:'PLANO', value: 4});
  this.uso.push({name:'VENDA', value: 5});
  this.uso.push({name:'OUTRO', value: 6});
  this.uso.push({name:'CREMAÇÃO', value: 7});
  this.uso.push({name:'FUNERÁRIO', value: 8});


  this.modelo.push({name:'COLETIVO', value: 0});
  this.modelo.push({name:'SELETIVO', value: 1});


}


ngOnInit(): void {
  this.items = [
    {label: 'Índices'},
    {label: 'Pesquisar Índices', routerLink: '/indices'},
    {label: 'Cadastrar Índices', routerLink: '/indices/cadastro'},
  ];
}

}
