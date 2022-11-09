import { Component, OnInit } from '@angular/core';

interface GruposDeCaixas {
  id:number
  descricao:string
}

@Component({
  selector: 'app-grupos-de-caixas',
  templateUrl: './grupos-de-caixas.component.html'
})
export class GruposDeCaixasComponent implements OnInit {
  gruposdeCaixas=[{id:1, descricao: 'Caixa um'}]
  tableData: GruposDeCaixas[] = [];
  
  cols: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'descricao', header: 'descricao' },
  ];

  this.tableData = 
  [{id:1,descricao:'Caixa um'},]
  }

}
