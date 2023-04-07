import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-pontos-interesse',
  templateUrl: './pontos-interesse.page.html',
  styleUrls: ['./pontos-interesse.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PontosInteressePage implements OnInit {

  pontos = [
    {
      titulo: 'Pena',
      imagem: '/assets/images/pena.jpg',
      descricao: 'Nas encostas de uma pequena montanha, há grandes rochas espalhadas. Uma delas se destaca, com a palavra "Sobreposta" escrita em letras grandes. Esta é a pedra que identifica a aldeia de Sobreposta, um local pitoresco situado nas suas imediações. A pedra é um símbolo da história e da cultura local, testemunhando a presença da comunidade na região desde tempos imemoriais.',
      
    },
    {
      titulo: 'Moinhos de Portuguediz',
      imagem: '/assets/images/moinhos.jpg',
      descricao: 'Os Moinhos de Portuguediz são um conjunto de pequenos moinhos de água rurais localizados numa zona rochosa e montanhosa. Estes moinhos históricos eram uma vez o coração da vida rural, produzindo farinha e outros produtos moídos. Hoje em dia, os moinhos são uma atração turística popular e um testemunho da história e cultura local. Alimentados por um pequeno riacho, os Moinhos de Portuguediz são um exemplo impressionante de como a natureza e o homem podem trabalhar juntos em harmonia.',
    },
    {
      titulo: 'S. Tomé',
      imagem: '/assets/images/stome.jpg',
      descricao: 'A Capela de São Tomé é um pequeno templo religioso, onde anualmente ocorre uma pequena festa popular com música e a especialidade gastronômica local "bola de carne". A capela, construída em pedra, é um lugar de devoção e tranquilidade para os habitantes da aldeia e visitantes que procuram um momento de contemplação.'
    }
  ];

  searchTerm: string = '';

  filteredNoticias() {
    return this.pontos.filter(ponto => {
      return ponto.titulo.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }

  handleChange(event: any) {
    this.searchTerm = event.detail.value;
  }

  openLink(link: string) {
    window.open(link, '_system', 'location=yes');
  }

  constructor() { }

  ngOnInit() {
  }

}
