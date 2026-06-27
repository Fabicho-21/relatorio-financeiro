import { Routes } from '@angular/router';
import { RelatorioFinanceiroCadastrar } from './relatorios-financeiros/relatorio-financeiro-cadastrar/relatorio-financeiro-cadastrar';
import { RelatorioFinanceiroEditar } from './relatorios-financeiros/relatorio-financeiro-editar/relatorio-financeiro-editar';
import { RelatorioFinanceiroListar } from './relatorios-financeiros/relatorio-financeiro-listar/relatorio-financeiro-listar';

export const routes: Routes = [
    { path: "cadastrar", loadComponent: () => RelatorioFinanceiroCadastrar },
    { path: "editar/:id", loadComponent: () => RelatorioFinanceiroEditar },
    { path: "listar", loadComponent: () => RelatorioFinanceiroListar },
];
