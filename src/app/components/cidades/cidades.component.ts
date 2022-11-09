import { Component, OnInit } from '@angular/core';

interface Cidade {
  id:number
  descricao:string
}
@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html'
})
export class CidadesComponent implements OnInit {
  tableData: Cidade[] = [];
  cols: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'descricao', header: 'descricao' },
  ];

  this.tableData = 
  [{id:1,descricao:'MESSEJANA'},]
  }

}
