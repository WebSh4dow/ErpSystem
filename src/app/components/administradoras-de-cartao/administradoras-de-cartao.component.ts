import { Component, OnInit } from '@angular/core';

interface AdministradoraCartao {
  id:number
  descricao:string
}

@Component({
  selector: 'app-administradoras-de-cartao',
  templateUrl: './administradoras-de-cartao.component.html'
  
})
export class AdministradorasDeCartaoComponent implements OnInit {

  tableData: AdministradoraCartao[] = [];
  
  cols: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'descricao', header: 'descricao' },
  ];

  this.tableData = 
  [{id:1,descricao:'VISA'},]
  }

}
