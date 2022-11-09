import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
           
           
            {
                label: '',
                items: [
                    {
                        label: 'Cadastros', icon: 'pi pi-plus-circle',
                        items: [
                            {
                                label: 'Básicos', icon: 'pi pi-plus-circle',
                                items: [
                                    { label: 'Estados-civis', icon: 'pi pi-plus-circle',routerLink:'/estado-civil' },
                                    { label: 'Graus de Parentesco', icon: 'pi pi-plus-circle',routerLink:'/grau-parentesco'},
                                    { label: 'Profissões', icon: 'pi pi-plus-circle',routerLink:'/profissoes' },
                                    { label: 'Religiões', icon: 'pi pi-plus-circle',routerLink:'/religioes' },
                                    { label: 'Tipos de Materiais', icon: 'pi pi-plus-circle',routerLink:'/tipos-materiais'},
                                ]
                            },
                            {
                                label: 'Empresas', icon: 'pi pi-plus-circle',
                                items: [
                                    { label: 'Cargos', icon: 'pi pi-plus-circle',routerLink:'cargos' },
                                    { label: 'Departamentos', icon: 'pi pi-plus-circle',routerLink:'departamentos' },
                                    { label: 'Funcionários', icon: 'pi pi-plus-circle',routerLink:'funcionarios' },
                                    { label: 'Filiais', icon: 'pi pi-plus-circle',routerLink:'filiais' },
                                    { label: 'Setores', icon: 'pi pi-plus-circle',routerLink:'setores' },
                                    { label: 'Formas de Pagamentos', icon: 'pi pi-plus-circle',routerLink:'formas-pagamentos' }
                                ]
                            },

                            {
                                label: 'Endereços', icon: 'pi pi-plus-circle',
                                items: [
                                    { label: 'Bairros', icon: 'pi pi-plus-circle',routerLink:'bairros' },
                                    { label: 'Cidades', icon: 'pi pi-plus-circle',routerLink:'cidades' },
                                    { label: 'Logradouros', icon: 'pi pi-plus-circle',routerLink:'logradouros' },
                                    { label: 'Tipos de Logradouro', icon: 'pi pi-plus-circle',routerLink:'tipos-logradouros'},
                                    { label: 'Distritos', icon: 'pi pi-plus-circle',routerLink:'distritos' }
                                ]
                            },

                            {
                                label: 'Finaceiro', icon: 'pi pi-plus-circle',
                                items: [
                                    { label: 'Administradoras de Cartões', icon: 'pi pi-plus-circle',routerLink:'administradoras-cartoes' },
                                    { label: 'Grupos de Caixas', icon: 'pi pi-plus-circle',routerLink:'grupos-de-caixas' },
                                    { label: 'Locais de Recebimentos', icon: 'pi pi-plus-circle',routerLink:'locais-de-recebimento' },
                                    { label: 'Planos de Contas', icon: 'pi pi-plus-circle',routerLink:'planos-de-contas' },
                                    
                                ]
                            },

                            {
                                label: 'Gerência', icon: 'pi pi-plus-circle',
                                items: [
                                    { label: 'Empresas do Plano', icon: 'pi pi-plus-circle',routerLink:'empresas-do-plano' },
                                    { label: 'Índices', icon: 'pi pi-plus-circle',routerLink:'indices' },
                                    { label: 'Planos Funerários', icon: 'pi pi-plus-circle',routerLink:'planos-funerarios' }
                                    
                                ]
                            },

                            {
                                label: 'Planos', icon: 'pi pi-plus-circle',
                                items: [
                                    { label: 'Clientes', icon: 'pi pi-plus-circle',routerLink:'clientes' },
                                    { label: 'Contratos', icon: 'pi pi-plus-circle',routerLink:'contratos' }
                                    
                                ]
                            },

                            {
                                label: 'Senhas', icon: 'pi pi-key',
                                items: [
                                    { label: 'Grupos de Usuário', icon: 'pi pi-key',routerLink:'permissoes-usuarios' },
                                    { label: 'Usuários', icon: 'pi pi-key',routerLink:'usuarios' }
                                    
                                ]
                            },

                           
                            
                            
                        ]
                    },
                   
                ]
            },

            {
                label: '',
                items: [
                    {
                        label: 'Movimentos', icon: 'pi pi-sort-alt',
                        items: [
                            {
                                label: 'Caixas', icon: 'pi pi-sort-alt', routerLink: '/caixas'
                            },
                            {
                                label: 'Baixas', icon: 'pi pi-sort-alt', routerLink: '/baixas'
                            },
                            
                            
                        ]
                    },
                    
                    {
                        label: 'Consultas', icon: 'pi pi-search',
                        items: [
                            {
                                label: 'Por Parcelas', icon: 'pi pi-search', routerLink: '/por-parcelas'
                            },
                            {
                                label: 'Por Endereço Descritivo', icon: 'pi pi-search',routerLink:'/enderecos-descritivos'
                            },

                            {
                                label: 'Por Código e Nome', icon: 'pi pi-search', routerLink: '/por-codigo-nome'
                            },

                            {
                                label: 'Por Endereço', icon: 'pi pi-search', routerLink: '/por-endereco'
                            },
                        ]
                    },

                    {
                        label: 'Impressões',icon:'pi pi-print',
                        items: [
                            {
                                label: 'Carnês Próprios', icon: 'pi pi-print',routerLink:'/carnes-proprios'
                            },
                            {
                                label: 'Carteiras Por Contratos', icon: 'pi pi-print',routerLink:'/carteiras'
                            },

                        ]
                    },
                    {
                        label: 'Ajuda',icon:'pi pi-info-circle',
                        items: [
                            {
                                label: 'Informações do Sistema', icon: 'pi pi-info-circle',routerLink:'/informacoes'
                            },
                            {
                                label: 'Solicitação de Atendimento', icon: 'pi pi-info-circle',routerLink:'/atendimento'
                            },

                        ]
                    },
                    {
                        label: 'Configurações',icon: 'pi pi-cog',
                        items: [
                            {
                                label: 'Impressões', icon: 'pi pi-cog',routerLink:'configuracoes-impressoes'
                            },
                            {
                                label: 'Cliente', icon: 'pi pi-cog',routerLink:'configuracoes-clientes'
                            },
                            {
                                label: 'Contratos', icon: 'pi pi-cog',routerLink:'configuracoes-contratos'
                            },
                            {
                                label: 'Recebimentos', icon: 'pi pi-cog',routerLink:'configuracoes-recebimentos'
                            },
                            {
                                label: 'Caixas', icon: 'pi pi-cog',routerLink:'configuracoes-caixas'
                            },

                        ]
                    }
                ]
            },
        ];
    }
}
