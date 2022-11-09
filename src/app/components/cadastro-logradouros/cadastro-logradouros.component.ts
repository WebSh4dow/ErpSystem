import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-logradouros',
  templateUrl: './cadastro-logradouros.component.html'
})
export class CadastroLogradourosComponent implements OnInit {

  items: any = [];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Logradouros'},
      {label: 'Pesquisar De Logradouros', routerLink: '/logradouros'},
      {label: 'Cadastro De Logradoutos', routerLink: '/logradouros/cadastro'},
    ];
  }

}
