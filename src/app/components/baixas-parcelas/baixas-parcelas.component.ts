import { Component, OnInit } from '@angular/core';

interface Parcelas{
  contratro:string
  referencia:string
  vencimento:string
  plano:string
  indices:string
  total:number
}

@Component({
  selector: 'app-baixas-parcelas',
  templateUrl: './baixas-parcelas.component.html'
})
export class BaixasParcelasComponent implements OnInit {
  ListParcelas = [{contrato:"",referencia:"",vencimento:"",plano:"",indice:"",total:""}]

  tableData: Parcelas[] = [];
  cols: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'descricao', header: 'descricao' },
      { field: 'status', header: 'status' }
  ];

  this.tableData = 
  [{contratro:'',referencia:'',vencimento:'',plano:'',indices:'',total:null}]
  }

}
