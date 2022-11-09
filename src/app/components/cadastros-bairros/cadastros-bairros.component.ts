import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastros-bairros',
  templateUrl: './cadastros-bairros.component.html'
})
export class CadastrosBairrosComponent implements OnInit {

  items: any = [];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Bairros'},
      {label: 'Pesquisar Bairros', routerLink: '/bairros'},
      {label: 'Cadastro de Bairros', routerLink: '/bairros/cadastro'},
    ];
  }

}
