import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-distritos',
  templateUrl: './cadastro-distritos.component.html'
})
export class CadastroDistritosComponent implements OnInit {

  items: any = [];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Distritos'},
      {label: 'Pesquisar Distritos', routerLink: '/distritos'},
      {label: 'Cadastro de Distritos', routerLink: '/distritos/cadastro'},
    ];
  }

}
