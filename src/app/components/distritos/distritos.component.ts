import { Component, OnInit } from '@angular/core';

interface Distritos {
  id:number
  descricao:string
}

@Component({
  selector: 'app-distritos',
  templateUrl: './distritos.component.html'
})
export class DistritosComponent implements OnInit {
  distritosArrayList=[{id:1, descricao: 'Distrito-9'}]
  tableData: Distritos[] = [];
  cols: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'descricao', header: 'descricao' },
  ];

  this.tableData = 
  [{id:1,descricao:'DISTRITO-9'},]
  }

}
