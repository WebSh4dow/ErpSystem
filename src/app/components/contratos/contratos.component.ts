import { Component, OnInit } from '@angular/core';

interface Contratos {
  id:number
  cliente:string
  admissao?:string
  carencia?:string
  plano?:string
  valor:string
}

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html'
})
export class ContratosComponent implements OnInit {
  tableData: Contratos[] = [];

  cols: any[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'cliente', header: 'cliente' },
      { field: 'admissao', header: 'admissao' },
      { field: 'carencia', header: 'carencia' },
      { field: 'plano', header: 'plano' },
      { field: 'valor', header: 'valor' },
  ];

  this.tableData = 
  [{id:1,cliente:'Peter Parker',admissao:'01/02/2022',carencia:'01/02/2022',plano:'Básico',valor:'R$10,00'},
   {id:2,cliente:'Edie Brock',admissao:'01/02/2022',carencia:'01/02/2022',plano:'Básico',valor:'R$10,00'}]
  }

}
