import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastrosBairrosComponent } from '../cadastros-bairros/cadastros-bairros.component';
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
import {SelectButtonModule} from 'primeng/selectbutton';
import { CidadesComponent } from './cidades.component';
import { CadastroCidadesComponent } from '../cadastro-cidades/cadastro-cidades.component';



@NgModule({
    declarations: [
        CidadesComponent,
        CadastroCidadesComponent
        
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
      SelectButtonModule
    ],
    exports: [
      CadastroCidadesComponent
    ]
  })
  export class BairroModule { }












