import { Component, OnInit } from '@angular/core';

interface Bairro {
  id:number
  descricao:string
}

@Component({
  selector: 'app-bairros',
  templateUrl: './bairros.component.html'
})

export class BairrosComponent implements OnInit {


  tableData: Bairro[] = [];
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
