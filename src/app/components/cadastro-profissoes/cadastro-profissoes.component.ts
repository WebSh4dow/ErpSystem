import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-profissoes',
  templateUrl: './cadastro-profissoes.component.html'
})
export class CadastroProfissoesComponent implements OnInit {

  items: any = [];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Profissões'},
      {label: 'Pesquisar Profissões', routerLink: '/profissoes'},
      {label: 'Cadastro de Profissões', routerLink: '/profissoes/cadastro'},
    ];
  }

}
