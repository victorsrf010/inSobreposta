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
    { nome: 'Sandim', morada: 'Sandim Rua', tipo: 'Café', url: '/establecimentos-detalhe' },
    { nome: 'Lagoa', morada: 'Lagoa Rua', tipo: 'Mini Mercado' },
    { nome: 'Bomba', morada: 'Bomba Rua', tipo: 'Ponto de abastecimento'  },
  ]
  
  
  public verDetalhe(establecimento: any) {
    this.router.navigate(['/establecimentos-detalhe', JSON.stringify(establecimento)])
    
  }

}
