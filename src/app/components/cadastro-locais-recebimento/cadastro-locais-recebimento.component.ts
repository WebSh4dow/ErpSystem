import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-locais-recebimento',
  templateUrl: './cadastro-locais-recebimento.component.html'
})
export class CadastroLocaisRecebimentoComponent implements OnInit {

  items: any = [];
  tipo: any = [];

  
  constructor() {
    this.tipo.push({name:'NORMAL', value: 0});
    this.tipo.push({name:'RETORNO BANCÁRIO', value: 1});
}

  ngOnInit(): void {
    this.items = [
      {label: 'Locais De Recebimento'},
      {label: 'Pesquisar Locais de Recebimento', routerLink: '/locais-de-recebimento'},
      {label: 'Cadastro de Cidades', routerLink: '/locais-de-recebimento/cadastro'},
    ];
  }

}
