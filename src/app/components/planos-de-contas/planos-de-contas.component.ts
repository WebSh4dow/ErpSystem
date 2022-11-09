import { Component, OnInit } from '@angular/core';
interface PlanosContas {
  id:number
  descricao:string
  ordem:string
  tipo:string
  status:string
}

@Component({
  selector: 'app-planos-de-contas',
  templateUrl: './planos-de-contas.component.html'
})
export class PlanosDeContasComponent implements OnInit {
  planosContasList=[{id:1, descricao: 'Pagamento na empresa',ordem:'for',tipo:'fornecedor',status:'A'}]
  tableData: PlanosContas[] = [];
  
  cols: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'descricao', header: 'descricao' },
  ];

  this.tableData = 
  [{id:1,descricao:'VISA',ordem:'ordem-1',tipo:'fornecedor',status:'ATIVO'}]
  }

}
