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
    { nome: 'GNR Sameiro', numero: '253 203 030'},
    { nome: 'Hospital S.Marcos', numero: '253 209 000'},
    { nome: 'PSP', numero: '253 200 420'},
    { nome: 'Bombeiros Municipais', numero: '253 264 077'},
    { nome: 'Jardim de Infância', numero: '253 636 303'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
