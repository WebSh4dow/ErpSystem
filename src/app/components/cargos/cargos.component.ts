import { Component, OnInit } from '@angular/core';

interface Cargos {
  id?:number
  descricao?:string
}

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html'
})
export class CargosComponent implements OnInit {
  cargosArrayList=[{id:1, descricao: 'GERENTE'}]
  tableData: Cargos[] = [];
  cols: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'descricao', header: 'descricao' },
  ];

  this.tableData = 
  [{id:1,descricao:'Estagiario'},]
  }

}
