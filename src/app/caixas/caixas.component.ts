import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';


export interface Caixas {
  grupo: string;
  numero: number;
  abertura: string;
  usuarioAbertura: string;
  Fechamento: string;
  usuarioFechamento: string;
  status:string

}

@Component({
  selector: 'app-caixas',
  templateUrl: './caixas.component.html'
})
export class CaixasComponent implements OnInit {

  caixasList=[
  {grupo:'Caixa um',

  numero:1, abertura: '05/03/2022',

  usuarioAbertura:'1-Administrador',

  fechamento:'',

  usuarioFechamento:'',

  status:'aberto'}

]

tableData: Caixas[] = [];
cols: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { field: 'grupo', header: 'grupo' },
      { field: 'numero', header: 'numero' },
      { field: 'abertura', header: 'abertura' },
      { field: 'usuarioAbertura', header: 'usuarioAbertura' },
      { field: 'Fechamento', header: 'Fechamento' },
      { field: 'usuarioFechamento', header: 'usuarioFechamento' },
      { field: 'status', header: 'status' },
      
  ];

  this.tableData = 
  [{grupo:'Caixa um',numero:1,abertura:'05/03/2022',usuarioAbertura:'Administrador',Fechamento:' 05/03/2022 ',usuarioFechamento:'Administrador',status:'aberto'}]
  }



 

}
