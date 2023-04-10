import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio'},
    { title: 'Notícias', url: '/noticias'},
    { title: 'Pontos de interesse', url: '/pontos-interesse'},
    { title: 'Estabelecimentos', url: '/establecimentos'},
    { title: 'Sobre Sobreposta', url: '/sobre'},
    { title: 'Contactos', url: '/contactos'},
  ];

  constructor() {}
}
