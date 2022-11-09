import { Component, OnInit } from '@angular/core';

interface ConsultaCodNome{
  id:number
  contrato:string
  cliente:string
  admissao:string
  carencia:string
}

@Component({
  selector: 'app-consulta-codigo-nome',
  templateUrl: './consulta-codigo-nome.component.html'
})
export class ConsultaCodigoNomeComponent implements OnInit {
ListCodigoNome = [{id:'',contrato:'',codigo:'',cliente:'',admissao:'',carencia:''}]

tableData: ConsultaCodNome[] = [];

cols: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'contrato', header: 'contrato' },
      { field: 'cliente', header: 'cliente' },
      { field: 'admissao', header: 'admissao' },
      { field: 'carencia', header: 'carencia' }
  ];

  this.tableData = 
  [{id:null,contrato:'',cliente:'',admissao:'',carencia:''}]
  }

}
