import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-contratos',
  templateUrl: './cadastro-contratos.component.html'
})
export class CadastroContratosComponent implements OnInit {

  items: any = [];

  cobranca: any = [];

  venda: any = [];

  nota: any = [];

  value1:string = "sim";

  selectStatus: any [];

  selectStatus2: any [];

  date1!: Date;

  minDate: Date;

  maxDate: Date;

  value4: number = 31;

  escolha:string;

  selectPessoa:any = null;

  invalidDates: Array<Date>
  value = 0;
  
  constructor() {
    this.cobranca.push({name:'NOVO', value: 0});
    this.cobranca.push({name:'RENOVACAO', value: 1});
    this.cobranca.push({name:'RECUPERAÇÃO', value: 2});
    this.cobranca.push({name:'TRANSFERÊNCIA', value: 3});
    

    this.venda.push({name:'INTERNA', value: 0});
    this.venda.push({name:'EXTERNA', value: 1});

    this.nota.push({name:'SIM', value: 0});
    this.nota.push({name:'NÃO', value: 1});
   


    this.selectStatus2 = [{label:'Sim',value:'sim'},{label:'Não',value:'nao'}]

    this.selectStatus = [{label:' Fisica',value:'Física'},{label:'juridica',value:'Júridica'}]

    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month -1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today,invalidDate];

}

  ngOnInit(): void {
    this.items = [
      {label: 'Cadastro de Contratos'},
      {label: 'Pesquisar de Contratos', routerLink: '/contratos'},
      {label: 'Cadastrar Planos de Contas', routerLink: '/contratos/cadastro'},
    ];

    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month -1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today,invalidDate];
  }


}
