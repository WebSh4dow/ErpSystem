import { Component, OnInit } from '@angular/core';

interface Usuario {  
    usuario:string
} 

@Component({
  selector: 'app-caixas-configuracoes',
  templateUrl: './caixas-configuracoes.component.html'
})

export class CaixasConfiguracoesComponent implements OnInit  {

  displayModal: boolean;

  displayBasic: boolean;

  displayBasic2: boolean;

  displayMaximizable: boolean;

  displayPosition: boolean;

  position: string;

  cols:any [] = []

  tableData: Usuario[] = [];

  showModalDialog() {
      this.displayModal = true;
  }

  
  ngOnInit(): void {
    this.cols = [
      { field: 'descricao', header: 'descricao' },
  ];

 
  }

}


