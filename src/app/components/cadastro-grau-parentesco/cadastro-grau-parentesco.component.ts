import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-grau-parentesco',
  templateUrl: './cadastro-grau-parentesco.component.html'
})
export class CadastroGrauParentescoComponent implements OnInit {

  items: any = [];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Graus de Parentescos'},
      {label: 'Pesquisar Graus de Parentescos', routerLink: '/graus-de-parentescos'},
      {label: 'Cadastro Graus de Parentescos', routerLink: '/grau-parentesco/cadastro'},
    ];
  }

}
