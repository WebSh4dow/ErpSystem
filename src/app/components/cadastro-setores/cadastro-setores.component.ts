import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-setores',
  templateUrl: './cadastro-setores.component.html'
})
export class CadastroSetoresComponent implements OnInit {

  items: any = [];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Setores'},
      {label: 'Pesquisar Setores', routerLink: '/setores'},
      {label: 'Cadastro de Setores', routerLink: '/setores/cadastro'},
    ];
  }
}
