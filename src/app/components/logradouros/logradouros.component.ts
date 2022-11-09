import { Component, OnInit } from '@angular/core';
interface Logradouro {
  id:number
  descricao:string
}
@Component({
  selector: 'app-logradouros',
  templateUrl: './logradouros.component.html'
})
export class LogradourosComponent implements OnInit {

  tableData: Logradouro[] = [];
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
