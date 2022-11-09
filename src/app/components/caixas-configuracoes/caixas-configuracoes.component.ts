import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caixas-configuracoes',
  templateUrl: './caixas-configuracoes.component.html',
  styleUrls: ['./caixas-configuracoes.component.scss']
})
export class CaixasConfiguracoesComponent  {

  displayModal: boolean;

  displayBasic: boolean;

  displayBasic2: boolean;

  displayMaximizable: boolean;

  displayPosition: boolean;

  position: string;

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

}


