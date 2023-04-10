import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { EstablecimentosPage } from 'src/app/establecimentos/establecimentos.page'

@Component({
  selector: 'app-establecimentos-detalhe',
  templateUrl: './establecimentos-detalhe.page.html',
  styleUrls: ['./establecimentos-detalhe.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class EstablecimentosDetalhePage implements OnInit {

  public establecimento: any;

  constructor(private rota: ActivatedRoute) { }

  ngOnInit() {
    this.rota.paramMap.subscribe(params => {
      const establecimentoParam = params.get('establecimento');
      if (establecimentoParam) {
        this.establecimento = JSON.parse(establecimentoParam);
      }
    });
}}
