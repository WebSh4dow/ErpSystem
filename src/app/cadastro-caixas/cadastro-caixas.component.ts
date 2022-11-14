import { Component, OnInit } from '@angular/core';






@Component({
  selector: 'app-cadastro-caixas',
  templateUrl: './cadastro-caixas.component.html'
})
export class CadastroCaixasComponent implements OnInit {
  date1!: Date;

  minDate: Date;

  maxDate: Date;

  invalidDates: Array<Date>

  items: any = [];

  displayModal: boolean;


  constructor() {
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
      {label: 'Abertura de Caixas'},
      {label: 'Pesquisar Caixas', routerLink: '/caixas'},
      {label: 'Cadastro de Caixas', routerLink: '/caixas/cadastro'},
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

  showModalDialog() {
    this.displayModal = true;
}

}
