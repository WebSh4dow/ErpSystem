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

  showBasicDialog() {
      this.displayBasic = true;
  }

  showBasicDialog2() {
      this.displayBasic2 = true;
  }

  showMaximizableDialog() {
      this.displayMaximizable = true;
  }

  showPositionDialog(position: string) {
      this.position = position;
      this.displayPosition = true;
  }

  ngOnInit(): void {
    this.cols = [
      { field: 'descricao', header: 'descricao' },
  ];

 
  }

}


