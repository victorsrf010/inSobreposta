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

  constructor() { }

  ngOnInit() {
  }

}
