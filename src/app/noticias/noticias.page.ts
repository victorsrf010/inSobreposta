import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
  
})
export class NoticiasPage implements OnInit {

  noticias = [
    {
      titulo: 'Magusto',
      subtitulo: 'População reuni-se para festejar.',
      imagem: '/assets/images/magusto.jpg',
      link: 'https://jfsobreposta.pt/index.php/sobreposta/noticias/51-magusto-em-sobreposta-reune-populacao'
    },
    {
      titulo: 'Dia do pai',
      subtitulo: 'Caminhada e plantação de arvores.',
      imagem: '/assets/images/diadopai2018.jpg',
      link: 'https://jfsobreposta.pt/index.php/sobreposta/noticias/49-sobreposta-assinala-dia-do-pai-com-caminhada-e-plantacao-de-arvores'
    },
    {
      titulo: 'Carnaval',
      subtitulo: 'Centenas se juntaram na fantasia.',
      imagem: '/assets/images/carnaval.jpg',
      link: 'https://jfsobreposta.pt/index.php/sobreposta/noticias/48-centenas-no-carnaval-de-espinho-sobreposta-e-pedralva'
    },
    {
      titulo: 'Trail solidário',
      subtitulo: '1º Trail solidário conta 1500 participantes.',
      imagem: '/assets/images/trail.jpg',
      link: 'https://jfsobreposta.pt/index.php/sobreposta/noticias/46-1-trail-solidario-envolve-1500-participantes'
    },
    {
      titulo: 'Almoço de Natal',
      subtitulo: 'Tradição repete-se em Sobreposta.',
      imagem: '/assets/images/natal.jpg',
      link: 'https://jfsobreposta.pt/index.php/sobreposta/noticias/43-tradicao-repete-se-em-sobreposta-com-almoco-'
    }
  ];

  searchTerm: string = '';

  filteredNoticias() {
  return this.noticias.filter(noticia => {
    return noticia.titulo.toLowerCase().includes(this.searchTerm.toLowerCase());
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
