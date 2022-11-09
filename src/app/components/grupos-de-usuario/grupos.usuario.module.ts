import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroCargosComponent } from '../cadastro-cargos/cadastro-cargos.component';


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
import { GruposDeUsuarioComponent } from './grupos-de-usuario.component';



@NgModule({
    declarations: [
        GruposDeUsuarioComponent
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
        GruposDeUsuarioComponent
    ]
  })
  export class BairroModule { }












