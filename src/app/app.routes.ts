import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'noticias',
    loadComponent: () => import('./noticias/noticias.page').then( m => m.NoticiasPage)
  },
  {
    path: 'pontos-interesse',
    loadComponent: () => import('./pontos-interesse/pontos-interesse.page').then( m => m.PontosInteressePage)
  },
  {
    path: 'establecimentos',
    loadComponent: () => import('./establecimentos/establecimentos.page').then( m => m.EstablecimentosPage)
  },
  {
    path: 'sobre',
    loadComponent: () => import('./sobre/sobre.page').then( m => m.SobrePage)
  },
  {
    path: 'contactos',
    loadComponent: () => import('./contactos/contactos.page').then( m => m.ContactosPage)
  },
  {
    path: 'inicio',
    loadComponent: () => import('./inicio/inicio.page').then( m => m.InicioPage)
  },
  


];
