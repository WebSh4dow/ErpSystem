import { Component, OnInit } from '@angular/core';

interface Indices {
  id:number
  descricao:string
}

@Component({
  selector: 'app-indices',
  templateUrl: './indices.component.html'
})
export class IndicesComponent implements OnInit {
  

  tableData: Indices[] = [];
  
  cols: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'descricao', header: 'descricao' },
  ];

  this.tableData = 
  [{id:1,descricao:'Dependente Atual'}]
    
  }

}
