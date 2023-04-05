import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-establecimentos',
  templateUrl: './establecimentos.page.html',
  styleUrls: ['./establecimentos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class EstablecimentosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
