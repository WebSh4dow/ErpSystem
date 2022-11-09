import { Component, OnInit } from '@angular/core';

interface Departamentos {
  id?:number
  descricao?:string
  sigla?:string
}
@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html'
})
export class DepartamentosComponent implements OnInit {
  departamentoList=[{id:1, descricao: 'DP1',sigla:'MSG'}]
  tableData: Departamentos[] = [];
  cols: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'descricao', header: 'descricao' },
      { field: 'sigla', header: 'descricao' },
  ];

  this.tableData = 
  [{id:1,descricao:'DP-EXEMPLO',sigla:'MSG'},]
  }

}
