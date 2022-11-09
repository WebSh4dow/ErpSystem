import { Component, OnInit } from '@angular/core';

interface planosFunerarios {
  id:number
  descricao:string
  parcela?:string
  valor?:string
}

@Component({
  selector: 'app-planos-funerarios',
  templateUrl: './planos-funerarios.component.html'
})
export class PlanosFunerariosComponent implements OnInit {
  tableData: planosFunerarios[] = [];
   cols: any[] = [];
    constructor() { }

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'descricao', header: 'descricao' },
      { field: 'valor', header: 'valor' },
      { field: 'parcela', header: 'parcela' },
  ];

  this.tableData = 
  [{id:1,descricao:'Dependente Atual',valor:'12R$',parcela:'12R$'},
   {id:2,descricao:'Dependente Antigo',valor:'12R$',parcela:'12R$'}]
  }

}
