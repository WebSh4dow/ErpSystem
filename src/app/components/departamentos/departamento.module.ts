import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroDepartamentosComponent } from '../cadastro-departamentos/cadastro-departamentos.component'; 
import { DepartamentosComponent } from './departamentos.component';

//PRIMENG
import {PanelModule} from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import {AutoFocusModule} from 'primeng/autofocus';
import {CardModule} from 'primeng/card';
import {InputMaskModule} from 'primeng/inputmask';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DividerModule} from 'primeng/divider';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        CadastroDepartamentosComponent,
        DepartamentosComponent
    ],
    imports: [
      CommonModule,
      PanelModule,
      InputTextModule,
      ButtonModule,
      TagModule,
      AutoFocusModule,
      CardModule,
      InputMaskModule,
      DropdownModule,
      InputSwitchModule,
      BreadcrumbModule,
      RadioButtonModule,
      DividerModule,
      InputTextareaModule,
      TableModule,
      HttpClientModule,
      FormsModule,
    ],
    exports: [
        CadastroDepartamentosComponent
    ]
  })
  export class BairroModule { }












