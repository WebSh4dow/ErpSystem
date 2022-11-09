import { Component, OnInit } from '@angular/core';
interface Pagamentos{
  id?:number
  descricao?:string
  sigla?:string
  tipo?:string
}
@Component({
  selector: 'app-formas-pagamentos',
  templateUrl: './formas-pagamentos.component.html'
})
export class FormasPagamentosComponent implements OnInit {
  formapagamentosList=[{id:1, descricao: 'Dinheiro',sigla:'DNHR',tipo:'Boleto'}]
  tableData: Pagamentos[] = [];
  cols: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'descricao', header: 'descricao' },
      { field: 'sigla', header: 'sigla' },
      { field: 'tipo', header: 'tipo' },
  ];

  this.tableData = 
  [{id:1,descricao:'DINHEIRO',sigla:'DNHR',tipo:'Boleto'},]
  }

}
