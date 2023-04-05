import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'noticias',
    loadComponent: () => import('./pages/noticias/noticias.page').then( m => m.NoticiasPage)
  },
  {
    path: 'pontos-interesse',
    loadComponent: () => import('./pages/pontos-interesse/pontos-interesse.page').then( m => m.PontosInteressePage)
  },
  {
    path: 'establecimentos',
    loadComponent: () => import('./pages/establecimentos/establecimentos.page').then( m => m.EstablecimentosPage)
  },
  {
    path: 'sobre',
    loadComponent: () => import('./pages/sobre/sobre.page').then( m => m.SobrePage)
  },
  {
    path: 'historia',
    loadComponent: () => import('./pages/historia/historia.page').then( m => m.HistoriaPage)
  },
  {
    path: 'resultados',
    loadComponent: () => import('./pages/resultados/resultados.page').then( m => m.ResultadosPage)
  },
  {
    path: 'contactos',
    loadComponent: () => import('./pages/contactos/contactos.page').then( m => m.ContactosPage)
  },
  {
    path: 'definicoes',
    loadComponent: () => import('./pages/definicoes/definicoes.page').then( m => m.DefinicoesPage)
  },
];
