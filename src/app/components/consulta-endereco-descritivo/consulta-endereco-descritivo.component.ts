import { Component, OnInit } from '@angular/core';
interface Mensalidade{
  id:number
  nome:string
  Endereco:string
  Telefone:string
}
@Component({
  selector: 'app-consulta-endereco-descritivo',
  templateUrl: './consulta-endereco-descritivo.component.html'
})
export class ConsultaEnderecoDescritivoComponent implements OnInit {
 ListEnderecoDescritivo =[{id:"",nome:"",endereco:"",telefone:""}]
  tableData: Mensalidade[] = [];
  cols: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'nome', header: 'endereco' },
      { field: 'telefone', header: 'telefone' }
  ];

  this.tableData = 
  [{id:null,nome:'',Endereco:'',Telefone:''}]
  }

}
