import { Component, OnInit } from '@angular/core';
interface Religioes {
  id?:number
  descricao?:string
}

@Component({
  selector: 'app-religioes',
  templateUrl: './religioes.component.html'
})
export class ReligioesComponent implements OnInit {
  religioesArray=[{id:1, descricao: 'Envangelico'}]

  tableData: Religioes[] = [];
  cols: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'descricao', header: 'descricao' },
  ];

  this.tableData = 
  [{id:1,descricao:'Envangelico'},]
  }

}
