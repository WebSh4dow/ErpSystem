import { Component, OnInit } from '@angular/core';
interface Setores {
  id?:number
  descricao:string
}
@Component({
  selector: 'app-setores',
  templateUrl: './setores.component.html'
})
export class SetoresComponent implements OnInit {
  setoresList=[{id:1, descricao: 'SE1'}]
  tableData: Setores[] = [];
  cols: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'descricao', header: 'descricao' },
  ];

  this.tableData = 
  [{id:1,descricao:'ADMINISTRATIVO'},]
  }

}
