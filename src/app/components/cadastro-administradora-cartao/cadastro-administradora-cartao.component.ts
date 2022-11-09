import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-administradora-cartao',
  templateUrl: './cadastro-administradora-cartao.component.html'
})
export class CadastroAdministradoraCartaoComponent implements OnInit {

  items: any = [];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Administradora de Cartões'},
      {label: 'Pesquisar Administradora de Cartões', routerLink: '/administradoras-cartoes'},
      {label: 'Cadastro de Administradora de Cartões', routerLink: '/administradoras-cartoes/cadastro'},
    ];
  }

}
