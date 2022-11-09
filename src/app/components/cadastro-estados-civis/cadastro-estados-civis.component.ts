import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-estados-civis',
  templateUrl: './cadastro-estados-civis.component.html'
})
export class CadastroEstadosCivisComponent implements OnInit {
  items: any = [];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Estado Civil'},
      {label: 'Pesquisar Estdos-Civis', routerLink: '/estado-civil'},
      {label: 'Cadastro de Estados Civis', routerLink: '/estado-civil/cadastro'},
    ];
  }

}
