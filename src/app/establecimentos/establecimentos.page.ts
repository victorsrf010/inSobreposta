import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-establecimentos',
  templateUrl: './establecimentos.page.html',
  styleUrls: ['./establecimentos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink, RouterLinkActive]

})
export class EstablecimentosPage {

  public nomeEstabelecimento: string;

  constructor(private nacController: NavController, private router: Router) {

    this.nomeEstabelecimento = "";
  
  }
  

  public establecimentos = [
    { nome: 'Sandim', morada: 'Imac Conceição II Sandim, 4715-553 Sobreposta', tipo: 'Café', tel:'965 550 671',imagem: '/assets/images/sandim.jpg' },
    { nome: 'Carreira de Tiro', morada: 'Rua Nossa, Tv. Sra. da Conceição 116, 4715-553 Sobreposta', tipo: 'Restaurante', tel:'253 281 380',imagem: '/assets/images/ct.jpg' },
    { nome: 'AutoSeduções', morada: 'R. Sra. da Conceição 104, 4715-553 Sobreposta', tipo: 'Oficina Automóvel', tel:'253 281 436', imagem: '/assets/images/as.jpg'  },
    { nome: 'Piscina Municipal', morada: 'R. da Piscina 22, 4715-553 Sobreposta', tipo: 'Piscina', tel:'253 636 948', imagem: '/assets/images/piscina.jpg'  },
    { nome: 'Pavilhão', morada: 'R. do Pavilhão, 4715-648 Sobreposta', tipo: 'Gimnodesportivo', tel:'253 241 458', imagem: '/assets/images/pavilhao.jpg'  },
  ]
  
}
