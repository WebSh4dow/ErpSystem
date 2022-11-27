
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorasDeCartaoComponent } from './components/administradoras-de-cartao/administradoras-de-cartao.component';
import { BairrosComponent } from './components/bairros/bairros.component';
import { CadastroCargosComponent } from './components/cadastro-cargos/cadastro-cargos.component';
import { CadastroDepartamentosComponent } from './components/cadastro-departamentos/cadastro-departamentos.component';
import { CadastroEstadosCivisComponent } from './components/cadastro-estados-civis/cadastro-estados-civis.component';
import { CadastroFiliaisComponent } from './components/cadastro-filiais/cadastro-filiais.component';
import { CadastroFormasPagamentosComponent } from './components/cadastro-formas-pagamentos/cadastro-formas-pagamentos.component';
import { CadastroGrauParentescoComponent } from './components/cadastro-grau-parentesco/cadastro-grau-parentesco.component';
import { CadastroMateriaisComponent } from './components/cadastro-materiais/cadastro-materiais.component';
import { CadastroProfissoesComponent } from './components/cadastro-profissoes/cadastro-profissoes.component';
import { CadastroReligioesComponent } from './components/cadastro-religioes/cadastro-religioes.component';
import { CadastroSetoresComponent } from './components/cadastro-setores/cadastro-setores.component';
import { CargosComponent } from './components/cargos/cargos.component';
import { CidadesComponent } from './components/cidades/cidades.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { DistritosComponent } from './components/distritos/distritos.component';
import { EmpreasDoPlanoComponent } from './components/empreas-do-plano/empreas-do-plano.component';
import { EstadosCivisComponent } from './components/estados-civis/estados-civis.component';
import { FiliaisComponent } from './components/filiais/filiais.component';
import { FormasPagamentosComponent } from './components/formas-pagamentos/formas-pagamentos.component';
import { GrauParentescoComponent } from './components/grau-parentesco/grau-parentesco.component';
import { GruposDeCaixasComponent } from './components/grupos-de-caixas/grupos-de-caixas.component';
import { IndicesComponent } from './components/indices/indices.component';
import { LocaisDeRecebimentoComponent } from './components/locais-de-recebimento/locais-de-recebimento.component';
import { LogradourosComponent } from './components/logradouros/logradouros.component';
import { MateriaisComponent } from './components/materiais/materiais.component';
import { PlanosDeContasComponent } from './components/planos-de-contas/planos-de-contas.component';
import { PlanosFunerariosComponent } from './components/planos-funerarios/planos-funerarios.component';
import { ProfissoesComponent } from './components/profissoes/profissoes.component';
import { ReligioesComponent } from './components/religioes/religioes.component';
import { SetoresComponent } from './components/setores/setores.component';
import { TiposLogradourosComponent } from './components/tipos-logradouros/tipos-logradouros.component';
import { GruposDeUsuarioComponent } from './components/grupos-de-usuario/grupos-de-usuario.component';
import { AppLayoutComponent } from './layout/app.layout.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { CadastrosBairrosComponent } from './components/cadastros-bairros/cadastros-bairros.component';
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
import { CadastroCaixasComponent } from './cadastro-caixas/cadastro-caixas.component';
import { CaixasComponent } from './caixas/caixas.component';
import { BaixasParcelasComponent } from './components/baixas-parcelas/baixas-parcelas.component';
import { ConsultasParcelasComponent } from './components/consultas-parcelas/consultas-parcelas.component';
import { ConsultaEnderecoDescritivoComponent } from './components/consulta-endereco-descritivo/consulta-endereco-descritivo.component';
import { ConsultaCodigoNomeComponent } from './components/consulta-codigo-nome/consulta-codigo-nome.component';
import { ConsultasPorEnderecosComponent } from './components/consultas-por-enderecos/consultas-por-enderecos.component';
import { CarnesPropriosComponent } from './components/carnes-proprios/carnes-proprios.component';
import { CarteirasContratosComponent } from './components/carteiras-contratos/carteiras-contratos.component';
import { InformacoesSistemaComponent } from './components/informacoes-sistema/informacoes-sistema.component';
import { SolicitacoesAtendimentoComponent } from './components/solicitacoes-atendimento/solicitacoes-atendimento.component';
import { ImpressoesComponent } from './components/impressoes/impressoes.component';
import { RecebimentosConfiguracoesComponent } from './components/recebimentos-configuracoes/recebimentos-configuracoes.component';
import { CaixasConfiguracoesComponent } from './components/caixas-configuracoes/caixas-configuracoes.component';
import { ClienteConfiguracoesComponent } from './components/cliente-configuracoes/cliente-configuracoes.component';
import { ContratosConfiguracoesComponent } from './components/contratos-configuracoes/contratos-configuracoes.component';
import { FuncionariosComponent } from './components/funcionarios/funcionarios.component';
import { CadastroFuncionariosComponent } from './components/cadastro-funcionarios/cadastro-funcionarios.component';
import { AtualizarContratosComponent } from './components/atualizar-contratos/atualizar-contratos.component';
import { CadastrarDependentesComponent } from './components/cadastrar-dependentes/cadastrar-dependentes.component';
const routes: Routes = [
  {
    path: '', component: AppLayoutComponent,
    children: [
      {path: 'estado-civil', component: EstadosCivisComponent},
      {path:'estado-civil/:id', component: CadastroEstadosCivisComponent},
      {path: 'grau-parentesco', component: GrauParentescoComponent},
      {path: 'grau-parentesco/:id', component: CadastroGrauParentescoComponent},
      {path: 'tipos-materiais', component: MateriaisComponent},
      {path: 'tipos-materiais/:id', component: CadastroMateriaisComponent},
      {path: 'religioes', component: ReligioesComponent},
      {path: 'religioes/:id', component: CadastroReligioesComponent},
      {path: 'profissoes', component: ProfissoesComponent},
      {path: 'profissoes/:id', component: CadastroProfissoesComponent},
      {path: 'cargos', component: CargosComponent},
      {path: 'cargos/:id', component: CadastroCargosComponent},
      {path: 'departamentos', component: DepartamentosComponent},
      {path: 'departamentos/:id', component: CadastroDepartamentosComponent},
      {path: 'filiais/:id', component: CadastroFiliaisComponent},
      {path: 'filiais', component: FiliaisComponent},
      {path: 'setores', component: SetoresComponent},
      {path: 'setores/:id', component: CadastroSetoresComponent},
      {path: 'formas-pagamentos', component: FormasPagamentosComponent},
      {path: 'formas-pagamentos/:id', component: CadastroFormasPagamentosComponent},
      {path: 'bairros', component: BairrosComponent},
      {path: 'bairros/:id', component: CadastrosBairrosComponent},
      {path: 'cidades', component: CidadesComponent},
      {path: 'cidades/:id', component: CadastroCidadesComponent},
      {path: 'logradouros', component: LogradourosComponent},
      {path: 'logradouros/:id', component: CadastroLogradourosComponent},
      {path: 'tipos-logradouros', component: TiposLogradourosComponent},
      {path: 'tipos-logradouros/:id', component: CadastroTiposLogradourosComponent},
      {path: 'distritos', component: DistritosComponent},
      {path: 'distritos/:id', component: CadastroDistritosComponent},
      {path: 'administradoras-cartoes', component: AdministradorasDeCartaoComponent},
      {path: 'administradoras-cartoes/:id', component: CadastroAdministradoraCartaoComponent},
      {path: 'grupos-de-caixas', component: GruposDeCaixasComponent},
      {path: 'grupos-de-caixas/:id', component: CadastroGruposDeCaixasComponent},
      {path: 'locais-de-recebimento', component: LocaisDeRecebimentoComponent},
      {path: 'locais-de-recebimento/:id', component: CadastroLocaisRecebimentoComponent},
      {path: 'planos-de-contas', component: PlanosDeContasComponent},
      {path: 'planos-de-contas/:id', component: CadastroPlanosContasComponent},
      {path: 'empresas-do-plano', component: EmpreasDoPlanoComponent},
      {path: 'empresas-do-plano/:id', component: CadastroEmpresaPlanoComponent},
      {path: 'indices', component: IndicesComponent},
      {path: 'indices/:id', component: CadastroIndicesComponent},
      {path: 'planos-funerarios', component: PlanosFunerariosComponent},
      {path: 'planos-funerarios/:id', component: CadastroPlanosFunerariosComponent},
      {path: 'permissoes-usuarios', component: GruposDeUsuarioComponent},
      {path: 'usuarios', component: UsuariosComponent},
      {path: 'clientes', component: ClientesComponent},
      {path: 'clientes/:id', component: CadastroPlanosClientesComponent},
      {path: 'contratos', component: ContratosComponent},
      {path: 'contratos/:id', component: CadastroContratosComponent},
      {path: 'atualizar/contratos/:id', component: AtualizarContratosComponent},
      {path: 'caixas/:id', component: CadastroCaixasComponent},
      {path: 'caixas', component: CaixasComponent},
      {path: 'baixas', component: BaixasParcelasComponent},
      {path: 'por-parcelas', component: ConsultasParcelasComponent},
      {path: 'enderecos-descritivos', component: ConsultaEnderecoDescritivoComponent},
      {path: 'por-codigo-nome', component: ConsultaCodigoNomeComponent},
      {path: 'por-endereco', component: ConsultasPorEnderecosComponent},
      {path: 'carnes-proprios', component: CarnesPropriosComponent},
      {path: 'carteiras', component: CarteirasContratosComponent},
      {path: 'informacoes', component: InformacoesSistemaComponent},
      {path: 'atendimento', component: SolicitacoesAtendimentoComponent},
      {path: 'configuracoes-impressoes', component: ImpressoesComponent},
      {path: 'configuracoes-clientes', component: ClienteConfiguracoesComponent},
      {path: 'configuracoes-contratos', component: ContratosConfiguracoesComponent},
      {path: 'configuracoes-recebimentos', component: RecebimentosConfiguracoesComponent},
      {path: 'configuracoes-caixas',component: CaixasConfiguracoesComponent},
      {path: 'funcionarios',component: FuncionariosComponent},
      {path: 'funcionarios/:id',component: CadastroFuncionariosComponent},
      {path:'cadastrar-dependentes',component:CadastrarDependentesComponent}
      
      

      
      
      
      
      
      
      
      
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



