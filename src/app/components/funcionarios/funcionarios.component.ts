import { Component, OnInit } from '@angular/core';
interface Funcionario {
  id?:number
  descricao?:string
  admissao:string
  cargo:string
  status:string
}

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss']
})
export class FuncionariosComponent implements OnInit {

  tableData: Funcionario[] = [];
  cols: any[] = [];
  constructor() {
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'descricao', header: 'descricao' },
      { field: 'admissao', header: 'admissao' },
      { field: 'status', header: 'status' },
      { field: 'cargo', header: 'cargo' }
  ];

  this.tableData = 
  [{id:1,descricao:'Jarmison',admissao:'2022-11-09',cargo:'Desenvolvedor De Sistemas',status:'Activo'},
  {id:2,descricao:'Tiago',admissao:'2022-09-11',cargo:'Desenvolvedor De Sistemas',status:'Activo'},
  {id:3,descricao:'Fulano',admissao:'2022-01-02',cargo:'Desenvolvedor De Sistemas',status:'Inativo'},
  {id:4,descricao:'Fulano de tal',admissao:'2022-01-03',cargo:'Desenvolvedor De Sistemas',status:'Inativo'}]
  
   }

  ngOnInit(): void {
  }

}
