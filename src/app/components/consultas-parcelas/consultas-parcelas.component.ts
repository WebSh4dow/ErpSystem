import { Component, OnInit } from '@angular/core';
interface Parcelas{
  id:number
  cliente:string
  admissao:string
  carencia:string
  plano:string
  valor:string
}
@Component({
  selector: 'app-consultas-parcelas',
  templateUrl: './consultas-parcelas.component.html'
})
export class ConsultasParcelasComponent implements OnInit {
  tableData: Parcelas[] = [];
  cols: any[] = [];
  constructor() {
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'descricao', header: 'descricao' },
      { field: 'status', header: 'status' }
  ];

  this.tableData = 
  [{id:null,cliente:'',admissao:'',carencia:'',plano:'',valor:''}]
   }

  ngOnInit(): void {
  }

}
