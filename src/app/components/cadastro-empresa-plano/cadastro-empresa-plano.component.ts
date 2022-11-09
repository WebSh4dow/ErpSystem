import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-empresa-plano',
  templateUrl: './cadastro-empresa-plano.component.html'
})
export class CadastroEmpresaPlanoComponent implements OnInit {

  items: any = [];

  tipo: any = [];

  status: any = [];
  
  date1!: Date;

  minDate: Date;

  maxDate: Date;

  value4: number = 31;

  invalidDates: Array<Date>
  
  
  constructor() {
    this.tipo.push({name:'NORMAL', value: 0});
    this.tipo.push({name:'CONVÊNIO', value: 1});
    this.tipo.push({name:'ESTENDIMENTO', value: 2});
    this.tipo.push({name:'CORPORATIVO', value: 3});

    this.status.push({name:'ATIVO', value: 0});
    this.status.push({name:'INATIVO', value: 1});


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
      {label: 'Empresas Do Plano'},
      {label: 'Pesquisar Empresas do Plano', routerLink: '/empresas-do-plano'},
      {label: 'Cadastrar Empresas do Plano', routerLink: '/empresas-do-plano/cadastro'},
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
