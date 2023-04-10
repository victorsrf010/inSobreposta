import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ContactosPage implements OnInit {

  public contactos = [
    { nome: 'GNR Sameiro', numero: '253 444 678', url: '/establecimentos-detalhe'},
    { nome: 'Lagoa', morada: 'Lagoa Rua' },
    { nome: 'Bomba', morada: 'Bomba Rua' },
  ]

  constructor() { }

  ngOnInit() {
  }

}
