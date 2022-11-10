import { Component, OnInit } from '@angular/core';

interface Usuario {  
  usuario:string
} 

@Component({
  selector: 'app-carnes-proprios',
  templateUrl: './carnes-proprios.component.html'
})
export class CarnesPropriosComponent implements OnInit {
  date1!: Date;

  date2!: Date;

  minDate: Date;

  maxDate: Date;

  invalidDates: Array<Date>

  items: any = [];

  tipo: any = [];


  displayModal: boolean;

  displayBasic: boolean;

  displayBasic2: boolean;

  displayMaximizable: boolean;

  displayPosition: boolean;

  position: string;

  tableData: Usuario[] = [];

  listaCarnes:[{codigo:'',cliente:'',plano:'',admissao:'',pagamento:''}]
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
  
    this.tipo.push({name:'Contrato', value: 0});
    this.tipo.push({name:'Referência', value: 1});}

  ngOnInit(): void {

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

showBasicDialog() {
  this.displayBasic = true;
}

showBasicDialog2() {
  this.displayBasic2 = true;
}

showMaximizableDialog() {
  this.displayMaximizable = true;
}

showPositionDialog(position: string) {
  this.position = position;
  this.displayPosition = true;
}
  }
