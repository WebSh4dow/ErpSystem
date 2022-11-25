import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cadastro-planos-clientes',
  templateUrl: './cadastro-planos-clientes.component.html',
  styleUrls:['./cadastro-planos-clientes.scss']
})
export class CadastroPlanosClientesComponent implements OnInit {

  items: any = [];

  sexo: any = [];

  uf: any = [];

  tipo: any = [];

  value1:string = "sim";

  selectStatus: any [];

  selectStatus2: any [];



  date1!: Date;

  date2!: Date;

  date3!: Date;
  
  date4!: Date;

  minDate: Date;

  maxDate: Date;

  value4: number = 31;

  escolha:string;

  selectPessoa:any = null;

  displayModalNaturalidade: boolean;
  
  displayModalProfissao: boolean;

  displayModalReligiao: boolean

  displayModalEstadoCivil:boolean



  displayCadastroModalNaturalidade:boolean

  displayModalCadastroProfissao:boolean

  displayModalCadastroReligiao:boolean

  displayModalCadastroEstadoCivil:boolean

  isHidden=false;
  options = true;

  invalidDates: Array<Date>
  
  constructor() {
    this.sexo.push({name:'MASCULINO', value: 0});
    this.sexo.push({name:'FEMININO', value: 1});

    this.uf.push({name:'CE', value: 0});
    

    this.tipo.push({name:'NÃO INFORMADO', value: 0});
    this.tipo.push({name:'A+', value: 1});
    this.tipo.push({name:'A-', value: 2});
    this.tipo.push({name:'B+', value: 3});
    this.tipo.push({name:'B-', value: 4});
    this.tipo.push({name:'AB+', value: 5});
    this.tipo.push({name:'AB-', value: 6});
    this.tipo.push({name:'O+', value: 7});
    this.tipo.push({name:'O-', value: 8});




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

toggle(){
  this.isHidden=!this.isHidden;
}

  ngOnInit(): void {
    this.items = [
      {label: 'Planos Clientes'},
      {label: 'Pesquisar Planos de Clientes', routerLink: '/clientes'},
      {label: 'Cadastrar Planos de Contas', routerLink: '/clientes/cadastro'},
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


  showModalDialogNaturalidade() {
    this.displayModalNaturalidade = true;
  }
  
  showModalDialogProfissao() {
    this.displayModalProfissao = true;
  }
  
  showModalDialogReligiao(){
    this.displayModalReligiao = true;
  }
  
  showModalDialogEstadoCivil(){
    this.displayModalEstadoCivil = true;
  }



  showModalDialogCadastroNaturalidade() {
    this.displayCadastroModalNaturalidade = true;
  }
  
  showModalDialogCadastroProfissao() {
    this.displayModalCadastroProfissao = true;
  }
  
  showModalDialogCadastroReligiao(){
    this.displayModalCadastroReligiao = true;
  }
  
  showModalDialogCadastroEstadoCivil(){
    this.displayModalCadastroEstadoCivil = true;
  }


  


}
