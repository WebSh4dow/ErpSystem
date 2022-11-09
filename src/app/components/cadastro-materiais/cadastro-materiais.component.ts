import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-materiais',
  templateUrl: './cadastro-materiais.component.html'
})
export class CadastroMateriaisComponent implements OnInit {

  items: any = [];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Materiais'},
      {label: 'Pesquisar Materiais', routerLink: '/tipos-materiais'},
      {label: 'Cadastro Materiais', routerLink: '/tipos-materiais/cadastro'},
    ];
  }

}
