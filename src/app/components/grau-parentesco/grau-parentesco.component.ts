import { Component, OnInit } from '@angular/core';

interface GrauParentesco {
  id?:number
  descricao?:string
}



@Component({
  selector: 'app-grau-parentesco',
  templateUrl: './grau-parentesco.component.html'
})
export class GrauParentescoComponent implements OnInit {
  grauParentescoArray=[{id:1, descricao: 'PAI'}]

  tableData: GrauParentesco[] = [];
  cols: any[] = [];


  constructor() { }

  ngOnInit(): void {

    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'descricao', header: 'descricao' },
  ];

  this.tableData = 
  [{id:1,descricao:'Pai'},
  {id:2,descricao:'Mãe'},
  {id:3,descricao:'Tio'}]
  }

}
