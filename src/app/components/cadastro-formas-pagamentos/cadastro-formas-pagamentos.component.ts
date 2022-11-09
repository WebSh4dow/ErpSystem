import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-formas-pagamentos',
  templateUrl: './cadastro-formas-pagamentos.component.html'
})
export class CadastroFormasPagamentosComponent implements OnInit {

  items: any = [];
  tipo: any = [];

  
  constructor() {
    this.tipo.push({name:'Boleto', value: 0});
    this.tipo.push({name:'Debito', value: 1});
    this.tipo.push({name:'Crédito', value: 2});
}

  ngOnInit(): void {
    this.items = [
      {label: 'Formas de Pagamento'},
      {label: 'Pesquisar Pagamentos', routerLink: '/formas-pagamentos'},
      {label: 'Cadastro de Pagamentos', routerLink: '/cargos/formas-pagamentos'},
    ];
  }

}
