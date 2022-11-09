import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-impressoes',
  templateUrl: './impressoes.component.html',
  styleUrls: ['./impressoes.component.scss'],
  
})


export class ImpressoesComponent  {
  selectStatus: any [];
  value1:string = "sim";

  constructor() {
    this.selectStatus = [{label:'Sim',value:'sim'},{label:'Não',value:'não'}]

  }

  

}
