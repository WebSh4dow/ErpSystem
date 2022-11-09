import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-religioes',
  templateUrl: './cadastro-religioes.component.html'
})
export class CadastroReligioesComponent implements OnInit {

  items: any = [];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Religiões'},
      {label: 'Pesquisar Religiões', routerLink: '/religioes'},
      {label: 'Cadastro de Religiões', routerLink: '/religioes/cadastro'},
    ];
  }

}
