import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatLabel } from '@angular/material/form-field';
import { MatMenuItem } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatTableModule } from '@angular/material/table'  
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
import { CaixasComponent } from './caixas.component';
import { CadastroCaixasComponent } from '../cadastro-caixas/cadastro-caixas.component';



@NgModule({
    declarations: [
    CaixasComponent,
    CadastroCaixasComponent
    
        
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
      MatTableDataSource,
      MatLabel,
      MatTableDataSource,
      MatMenuItem,
      MatToolbarModule,
      MatFormFieldModule,
      MatTableModule
    ],
    exports: [
        CadastroCaixasComponent
    ]
  })
  export class BairroModule { }












