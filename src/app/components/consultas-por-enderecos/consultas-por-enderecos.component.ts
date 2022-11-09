import { Component, OnInit } from '@angular/core';

interface ConsultaEndereco{
  id:number
  contrato:string
  cliente:string
  plano:string
  pagamento:string
  data:string
}

@Component({
  selector: 'app-consultas-por-enderecos',
  templateUrl: './consultas-por-enderecos.component.html'
})
export class ConsultasPorEnderecosComponent implements OnInit {
  porEnderecos = [{contrato:'',cliente:'',plano:'',pagamentos:'',admissao:''}]
  tableData: ConsultaEndereco[] = [];
  cols: any[] = [];
  constructor() {
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'contrato', header: 'contrato' },
      { field: 'cliente', header: 'cliente' },
      { field: 'plano', header: 'plano' },
      { field: 'pagamento', header: 'pagamento' }
  ];

  this.tableData = 
  [{id:null,contrato:'',cliente:'',plano:'',pagamento:'',data:''}]
   }

  ngOnInit(): void {
  }

}
