import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitacoes-atendimento',
  templateUrl: './solicitacoes-atendimento.component.html'
})
export class SolicitacoesAtendimentoComponent implements OnInit {
  tipo: any = [];
  constructor() { }

  ngOnInit(): void {
    this.tipo.push({name:'Selecione o Motivo de Atendimento', value: 0});
    this.tipo.push({name:'Agendar Treinamento', value: 1});
    this.tipo.push({name:'Agendar Visita', value: 2});
    this.tipo.push({name:'Configuração de impressora', value: 3});
    this.tipo.push({name:'Dúvidas Gerais', value: 4});
    this.tipo.push({name:'Instalação de Sistema', value: 5});
    this.tipo.push({name:'Renovação de Serial', value: 6});
    this.tipo.push({name:'Reportar um problema', value: 7});
    this.tipo.push({name:'Segunda Via de Boleto', value: 8});
    this.tipo.push({name:'Outro', value: 9});
  }

}
