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

  date2!: Date;

  date3!: Date;

  date4!: Date;

  date5!: Date;

  minDate: Date;

  maxDate: Date;

  value4: number = 31;

  escolha:string;

  selectPessoa:any = null;


  displayModalCliente: boolean;
  
  displayModalPlano: boolean;

  displayModalVendedor: boolean

  displayModalSupervisor:boolean

  displayModalCobrador: boolean

  invalidDates: Array<Date>
  value = 0;
  
  constructor() {
    this.cobranca.push({name:'Selecione um tipo de cobrança', value: 0});
    this.cobranca.push({name:'Boleto', value: 1});
    this.cobranca.push({name:'Carnê', value: 2});
    this.cobranca.push({name:'Carteira', value: 3});
    this.cobranca.push({name:'Débito Automático', value: 4});
    this.cobranca.push({name:'Empresa', value: 5});


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
      {label: 'Atualizar Planos de Contas', routerLink: '/contratos/cadastro'},
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
  showModalCliente() {
    this.displayModalCliente = true
  }

  showModalPlanos(){
    this.displayModalPlano = true
  }

   showModalVendedor(){
    this.displayModalVendedor = true
   }

   showModalSupervisor(){
    this.displayModalSupervisor = true
   }

   showModalCobrador(){
    this.displayModalCobrador = true
   }

 
}
