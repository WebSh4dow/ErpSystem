import { Component, OnInit } from '@angular/core';
interface Usuario{
  id:number
  email:string
  funcionario:string
  status:string
}
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html'
})
export class UsuariosComponent implements OnInit {
  usuariosList=[{id:1, Email: 'Estágiario@gmail.com',funcionario:'Administrador',status:'ativo'}]
  tableData: Usuario[] = [];
  cols: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'email', header: 'email' },
      { field: 'funcionario', header: 'funcionario'},
      { field: 'status', header: 'status'}
  ];

  this.tableData = 
  [{id:1,email:'Gerente@Gmail.com',funcionario:'Fulano De Tal',status:'Ativo'}]
  }

}
