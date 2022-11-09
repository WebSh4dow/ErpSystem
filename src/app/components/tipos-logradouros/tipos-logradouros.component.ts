import { Component, OnInit } from '@angular/core';
interface TiposLogradouros {
  id?:number
  descricao?:string
}
@Component({
  selector: 'app-tipos-logradouros',
  templateUrl: './tipos-logradouros.component.html'
})
export class TiposLogradourosComponent implements OnInit {
  tiposlogradouros=[{id:1, descricao: 'Jabuti'}]
  tableData: TiposLogradouros[] = [];
  cols: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'descricao', header: 'descricao' },
  ];

  this.tableData = 
  [{id:1,descricao:'JABUTI'},]
  }

}
