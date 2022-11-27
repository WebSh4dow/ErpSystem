import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-dependentes',
  templateUrl: './cadastrar-dependentes.component.html'
})
export class CadastrarDependentesComponent implements OnInit {


  minDate: Date;

  selectStatus:any =[]

  maxDate: Date;

  date1!: Date;

  date2!: Date;

  date3!: Date;

  date4!: Date;

  value1 :string= "não"

  value2 :string= "não"

  value3 :string= "não"

  tipo: any =[];
  
  sexo: any = [];

  invalidDates: Array<Date>

  displayModalGrauParentesco:boolean

  displayModalReligiao:boolean

  displayModalProfissao:boolean


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

    this.selectStatus = [{label:' Sim',value:'sim'},{label:'Não',value:'não'}]

    this.tipo.push({name:'ATIVO', value: 0});
    this.tipo.push({name:'INATIVO', value: 1});
    this.tipo.push({name:'CANCELADO', value: 2});

    this.sexo.push({name:'MASCULINO', value: 0});
    this.sexo.push({name:'FEMININO', value: 1});



  }

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


  showModalDialogGrauParentesco() {
    this.displayModalGrauParentesco = true;
}

  showModalDialogReligiao()  {
    this.displayModalReligiao = true;
  }
  
  showModalDialogProfissao() {
    this.displayModalProfissao = true; 
  }


}
