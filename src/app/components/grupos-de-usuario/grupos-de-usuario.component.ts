import { Component, OnInit } from '@angular/core';

interface GrupoUsuario{
  id:number
  descricao:string
  status:string
}

@Component({
  selector: 'app-grupos-de-usuario',
  templateUrl: './grupos-de-usuario.component.html'
})
export class GruposDeUsuarioComponent implements OnInit {

  tableData: GrupoUsuario[] = [];
  cols: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'descricao', header: 'descricao' },
      { field: 'status', header: 'status' }
  ];

  this.tableData = 
  [{id:1,descricao:'Gerente',status:'Ativo'}]
  }

}
