import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'
import { MatTableModule } from '@angular/material/table'  

import { AppLayoutModule } from './layout/app.layout.module';


import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import {FieldsetModule} from 'primeng/fieldset';
import {CalendarModule} from 'primeng/calendar';
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
import {SelectButtonModule} from 'primeng/selectbutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {TabViewModule} from 'primeng/tabview';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from "@angular/common/http";
import {DialogModule} from 'primeng/dialog';
import {CheckboxModule} from 'primeng/checkbox';

import { EstadosCivisComponent } from './components/estados-civis/estados-civis.component';
import { GrauParentescoComponent } from './components/grau-parentesco/grau-parentesco.component';
import { ProfissoesComponent } from './components/profissoes/profissoes.component';
import { ReligioesComponent } from './components/religioes/religioes.component';
import { MateriaisComponent } from './components/materiais/materiais.component';
import { CadastroEstadosCivisComponent } from './components/cadastro-estados-civis/cadastro-estados-civis.component';
import { CadastroGrauParentescoComponent } from './components/cadastro-grau-parentesco/cadastro-grau-parentesco.component';
import { CadastroMateriaisComponent } from './components/cadastro-materiais/cadastro-materiais.component';
import { CadastroProfissoesComponent } from './components/cadastro-profissoes/cadastro-profissoes.component';
import { CadastroReligioesComponent } from './components/cadastro-religioes/cadastro-religioes.component';
import { CargosComponent } from './components/cargos/cargos.component';
import { CadastroCargosComponent } from './components/cadastro-cargos/cadastro-cargos.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { CadastroDepartamentosComponent } from './components/cadastro-departamentos/cadastro-departamentos.component';
import { FiliaisComponent } from './components/filiais/filiais.component';
import { CadastroFiliaisComponent } from './components/cadastro-filiais/cadastro-filiais.component';
import { SetoresComponent } from './components/setores/setores.component';
import { CadastroSetoresComponent } from './components/cadastro-setores/cadastro-setores.component';
import { FormasPagamentosComponent } from './components/formas-pagamentos/formas-pagamentos.component';
import { CadastroFormasPagamentosComponent } from './components/cadastro-formas-pagamentos/cadastro-formas-pagamentos.component';
import { BairrosComponent } from './components/bairros/bairros.component';
import { CidadesComponent } from './components/cidades/cidades.component';
import { LogradourosComponent } from './components/logradouros/logradouros.component';
import { TiposLogradourosComponent } from './components/tipos-logradouros/tipos-logradouros.component';
import { DistritosComponent } from './components/distritos/distritos.component';
import { CadastrosBairrosComponent } from './components/cadastros-bairros/cadastros-bairros.component';
import { AdministradorasDeCartaoComponent } from './components/administradoras-de-cartao/administradoras-de-cartao.component';
import { GruposDeCaixasComponent } from './components/grupos-de-caixas/grupos-de-caixas.component';
import { LocaisDeRecebimentoComponent } from './components/locais-de-recebimento/locais-de-recebimento.component';
import { PlanosDeContasComponent } from './components/planos-de-contas/planos-de-contas.component';
import { EmpreasDoPlanoComponent } from './components/empreas-do-plano/empreas-do-plano.component';
import { IndicesComponent } from './components/indices/indices.component';
import { PlanosFunerariosComponent } from './components/planos-funerarios/planos-funerarios.component';
import { GruposDeUsuarioComponent } from './components/grupos-de-usuario/grupos-de-usuario.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { CadastroCidadesComponent } from './components/cadastro-cidades/cadastro-cidades.component';
import { CadastroLogradourosComponent } from './components/cadastro-logradouros/cadastro-logradouros.component';
import { CadastroTiposLogradourosComponent } from './components/cadastro-tipos-logradouros/cadastro-tipos-logradouros.component';
import { CadastroDistritosComponent } from './components/cadastro-distritos/cadastro-distritos.component';
import { CadastroAdministradoraCartaoComponent } from './components/cadastro-administradora-cartao/cadastro-administradora-cartao.component';
import { CadastroGruposDeCaixasComponent } from './components/cadastro-grupos-de-caixas/cadastro-grupos-de-caixas.component';
import { CadastroLocaisRecebimentoComponent } from './components/cadastro-locais-recebimento/cadastro-locais-recebimento.component';
import { CadastroPlanosContasComponent } from './components/cadastro-planos-contas/cadastro-planos-contas.component';
import { CadastroEmpresaPlanoComponent } from './components/cadastro-empresa-plano/cadastro-empresa-plano.component';
import { CadastroIndicesComponent } from './components/cadastro-indices/cadastro-indices.component';
import { CadastroPlanosFunerariosComponent } from './components/cadastro-planos-funerarios/cadastro-planos-funerarios.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { CadastroPlanosClientesComponent } from './components/cadastro-planos-clientes/cadastro-planos-clientes.component';
import { ContratosComponent } from './components/contratos/contratos.component';
import { CadastroContratosComponent } from './components/cadastro-contratos/cadastro-contratos.component';
import { CaixasComponent } from './caixas/caixas.component';
import { CadastroCaixasComponent } from './cadastro-caixas/cadastro-caixas.component';
import { BaixasParcelasComponent } from './components/baixas-parcelas/baixas-parcelas.component';
import { SolicitacoesAtendimentoComponent } from './components/solicitacoes-atendimento/solicitacoes-atendimento.component';
import { ConsultasParcelasComponent } from './components/consultas-parcelas/consultas-parcelas.component';
import { ConsultaEnderecoDescritivoComponent } from './components/consulta-endereco-descritivo/consulta-endereco-descritivo.component';
import { ConsultaCodigoNomeComponent } from './components/consulta-codigo-nome/consulta-codigo-nome.component';
import { ConsultasPorEnderecosComponent } from './components/consultas-por-enderecos/consultas-por-enderecos.component';
import { CarnesPropriosComponent } from './components/carnes-proprios/carnes-proprios.component';
import { CarteirasContratosComponent } from './components/carteiras-contratos/carteiras-contratos.component';
import { InformacoesSistemaComponent } from './components/informacoes-sistema/informacoes-sistema.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImpressoesComponent } from './components/impressoes/impressoes.component';
import { ClienteConfiguracoesComponent } from './components/cliente-configuracoes/cliente-configuracoes.component';
import { ContratosConfiguracoesComponent } from './components/contratos-configuracoes/contratos-configuracoes.component';
import { RecebimentosConfiguracoesComponent } from './components/recebimentos-configuracoes/recebimentos-configuracoes.component';
import { CaixasConfiguracoesComponent } from './components/caixas-configuracoes/caixas-configuracoes.component';
import { FuncionariosComponent } from './components/funcionarios/funcionarios.component';
import { CadastroFuncionariosComponent } from './components/cadastro-funcionarios/cadastro-funcionarios.component';
import { AtualizarClienteComponent } from './components/atualizar-cliente/atualizar-cliente.component';
import { AtualizarContratosComponent } from './components/atualizar-contratos/atualizar-contratos.component';
import { EdicaoClienteComponent } from './components/edicao-cliente/edicao-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    EstadosCivisComponent,
    GrauParentescoComponent,
    ProfissoesComponent,
    ReligioesComponent,
    MateriaisComponent,
    CadastroEstadosCivisComponent,
    CadastroGrauParentescoComponent,
    CadastroMateriaisComponent,
    CadastroProfissoesComponent,
    CadastroReligioesComponent,
    CargosComponent,
    CadastroCargosComponent,
    DepartamentosComponent,
    CadastroDepartamentosComponent,
    FiliaisComponent,
    CadastroFiliaisComponent,
    SetoresComponent,
    CadastroSetoresComponent,
    FormasPagamentosComponent,
    CadastroFormasPagamentosComponent,
    BairrosComponent,
    CidadesComponent,
    LogradourosComponent,
    TiposLogradourosComponent,
    DistritosComponent,
    CadastrosBairrosComponent,
    AdministradorasDeCartaoComponent,
    GruposDeCaixasComponent,
    LocaisDeRecebimentoComponent,
    PlanosDeContasComponent,
    EmpreasDoPlanoComponent,
    IndicesComponent,
    PlanosFunerariosComponent,
    GruposDeUsuarioComponent,
    UsuariosComponent,
    CadastroCidadesComponent,
    CadastroLogradourosComponent,
    CadastroTiposLogradourosComponent,
    CadastroDistritosComponent,
    CadastroAdministradoraCartaoComponent,
    CadastroGruposDeCaixasComponent,
    CadastroLocaisRecebimentoComponent,
    CadastroPlanosContasComponent,
    CadastroEmpresaPlanoComponent,
    CadastroIndicesComponent,
    CadastroPlanosFunerariosComponent,
    ClientesComponent,
    CadastroPlanosClientesComponent,
    ContratosComponent,
    CadastroContratosComponent,
    CaixasComponent,
    CadastroCaixasComponent,
    BaixasParcelasComponent,
    SolicitacoesAtendimentoComponent,
    ConsultasParcelasComponent,
    ConsultaEnderecoDescritivoComponent,
    ConsultaCodigoNomeComponent,
    ConsultasPorEnderecosComponent,
    CarnesPropriosComponent,
    CarteirasContratosComponent,
    InformacoesSistemaComponent,
    ImpressoesComponent,
    ClienteConfiguracoesComponent,
    ContratosConfiguracoesComponent,
    RecebimentosConfiguracoesComponent,
    CaixasConfiguracoesComponent,
    FuncionariosComponent,
    CadastroFuncionariosComponent,
    AtualizarClienteComponent,
    AtualizarContratosComponent,
    EdicaoClienteComponent,
    
    
   
  ],
  imports: [
    BrowserModule,
    AppLayoutModule,
    AppRoutingModule,
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
    FormsModule,
    DividerModule,
    InputTextareaModule,
    TableModule,
    CoreModule,
    SharedModule,
    SelectButtonModule,
    CalendarModule,
    InputNumberModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatFormFieldModule,
    MatTableModule,
    FileUploadModule,
    HttpClientModule,
    CheckboxModule,
    DialogModule,
    MatIconModule,
    FieldsetModule,
    TabViewModule

   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
