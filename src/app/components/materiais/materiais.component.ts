import { Component, OnInit } from '@angular/core';
interface Materiais {
  id?:number
  descricao?:string
}


@Component({
  selector: 'app-materiais',
  templateUrl: './materiais.component.html'
})
export class MateriaisComponent implements OnInit {
  tableData: Materiais[] = [];
  cols: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'descricao', header: 'descricao' },
  ];

  this.tableData = 
  [{id:1,descricao:'DADOS CARREGADOS DO FRONT END'},]
  }

}
