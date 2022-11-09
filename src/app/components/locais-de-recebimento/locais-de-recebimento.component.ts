import { Component, OnInit } from '@angular/core';
interface LocaisDeRecebimento {
  id?:number
  descricao?:string
  sigla?:string
}

@Component({
  selector: 'app-locais-de-recebimento',
  templateUrl: './locais-de-recebimento.component.html'
})
export class LocaisDeRecebimentoComponent implements OnInit {
  locaisDeRecebimento=[{id:1, descricao: 'Pagamento na empresa',sigla:'PE'}]
  tableData: LocaisDeRecebimento[] = [];
  cols: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'descricao', header: 'descricao' },
      { field: 'sigla', header: 'sigla' },
  ];

  this.tableData = 
  [{id:1,descricao:'Pai',sigla:'PE'}]
  }

}
