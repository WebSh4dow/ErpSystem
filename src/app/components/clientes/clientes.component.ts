import { Component, OnInit } from '@angular/core';

interface planosFunerarios {
  id:number
  nome:string
  pessoa?:string
  dados?:string
}

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})

export class ClientesComponent implements OnInit {
  
  tableData: planosFunerarios[] = [];

  cols: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'nome', header: 'nome' },
      { field: 'pessoa', header: 'pessoa' },
      { field: 'dados', header: 'dados' },
  ];

  this.tableData = 
  [{id:1,nome:'Peter Parker',pessoa:'Física',dados:'	111.111.111-11 '},
   {id:2,nome:'Edie Brock',pessoa:'Juridica',dados:'	000.000.000-00 '}]
   
  }

}
