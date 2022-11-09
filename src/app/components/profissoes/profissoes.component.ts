import { Component, OnInit } from '@angular/core';

interface Profissoes {
  id?:number
  descricao?:string
}


@Component({
  selector: 'app-profissoes',
  templateUrl: './profissoes.component.html'
})
export class ProfissoesComponent implements OnInit {

  tableData: Profissoes[] = [];
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
