import { Component, OnInit } from '@angular/core';

interface estadoCIvil {
  id?:number
  descricao?:string
}


@Component({
  selector: 'app-estados-civis',
  templateUrl: './estados-civis.component.html'
})
export class EstadosCivisComponent implements OnInit {


  tableData: estadoCIvil[] = [];
  cols: any[] = [];


  days:any []
  constructor() { 
    this.days = [
      {label: 'Monday', value: 'monday'},
      {label: 'Tuesday', value: 'tuesday'},
      {label: 'Wednesday', value: 'wednesday'},
      {label: 'Thursday', value: 'thursday'},
      {label: 'Friday', value: 'friday'},
      {label: 'Saturday', value: 'saturday'},
      {label: 'Sunday', value: 'sunday'}
  ]

  
  }

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'descricao', header: 'descricao' },
  ];

  this.tableData = 
  [{id:1,descricao:'Casado'},
  {id:2,descricao:'Solteiro'},
  {id:3,descricao:'Viuvo'}]


  
  }

}
