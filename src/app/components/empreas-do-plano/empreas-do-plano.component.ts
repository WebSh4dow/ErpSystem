import { Component, OnInit } from '@angular/core';

interface EmpresasDoPlano {
  id:number
  descricao:string
}

@Component({
  selector: 'app-empreas-do-plano',
  templateUrl: './empreas-do-plano.component.html'
})
export class EmpreasDoPlanoComponent implements OnInit {
  empresasList=[{id:1, descricao: 'EMPRESA 1'}]
  tableData: EmpresasDoPlano[] = [];
  
  cols: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'descricao', header: 'descricao' },
  ];

  this.tableData = 
  [{id:1,descricao:'Empresa 1'},]
  }

}
