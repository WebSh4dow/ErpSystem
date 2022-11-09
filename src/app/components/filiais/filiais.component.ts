import { Component, OnInit } from '@angular/core';

interface Filiais {
  id?:number
  nome?:string
  sigla?:string
  status?:string
}

@Component({
  selector: 'app-filiais',
  templateUrl: './filiais.component.html'
})
export class FiliaisComponent implements OnInit {

  tableData: Filiais[] = [];
  cols: any[] = [];

    constructor() {}

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'nome', header: 'nome' },
      { field: 'sigla', header: 'sigla' },
      { field: 'status', header: 'status' },
  ];

  this.tableData = 
  [{id:1,nome:'Matriz',sigla:'MSG',status:'ativo'},]
  }

}
