import { Component } from '@angular/core';
import { LayoutHeaderComponent } from '../../../layout/layout-header/layout-header.component';
import { LayoutFooterComponent } from '../../../layout/layout-footer/layout-footer.component';
import { CardProdutoComponent } from '../../../components/card-produto/card-produto.component';
import { CommonModule } from '@angular/common';
import { BotaoVoltarComponent } from '../../../components/botao-voltar/botao-voltar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estoque-cortavento',
  standalone: true,
  imports: [LayoutHeaderComponent, LayoutFooterComponent, CardProdutoComponent, CommonModule, BotaoVoltarComponent],
  templateUrl: './estoque-cortavento.component.html',
  styleUrl: './estoque-cortavento.component.css'
})
export class EstoqueCortaventoComponent {

  constructor(private router: Router) {

  }
  
  retro() {
    this.router.navigate(['retro']);
  }
  short() {
    this.router.navigate(['short']);
  }
  
  produtos = [
    {
      nomeCamisa: 'Alemanha',
      valor: 'R$ 300,00',
      imagem: '/assets/image/corta_vento-alemanha-1.jpeg'
    },
    {
      nomeCamisa: 'Alemanha',
      valor: 'R$ 300,00',
      imagem: '/assets/image/corta_vento-alemanha.jpeg'
    },
    {
      nomeCamisa: 'Argentina',
      valor: 'R$ 300,00',
      imagem: '/assets/image/corta_vento-argentina-1.jpeg'
    },
    {
      nomeCamisa: 'Argentina',
      valor: 'R$ 300,00',
      imagem: '/assets/image/corta_vento-argentina.jpeg'
    },
    {
      nomeCamisa: 'Arsenal',
      valor: 'R$ 300,00',
      imagem: '/assets/image/corta_vento-arsenal.jpeg'
    },
    {
      nomeCamisa: 'Borussia Dortmund',
      valor: 'R$ 300,00',
      imagem: '/assets/image/corta_vento-borussia.jpeg'
    },
    {
      nomeCamisa: 'Brasil',
      valor: 'R$ 300,00',
      imagem: '/assets/image/corta_vento-brasil-1.jpeg'
    },
    {
      nomeCamisa: 'Brasil',
      valor: 'R$ 300,00',
      imagem: '/assets/image/corta_vento-brasil-2.jpeg'
    },
    {
      nomeCamisa: 'Brasil',
      valor: 'R$ 300,00',
      imagem: '/assets/image/corta_vento-brasil-3.jpg'
    },
    {
      nomeCamisa: 'Brasil',
      valor: 'R$ 300,00',
      imagem: '/assets/image/corta_vento-brasil.jpeg'
    },
    {
      nomeCamisa: 'Corinthians',
      valor: 'R$ 300,00',
      imagem: '/assets/image/corta_vento-corinthians.jpeg'
    },
    {
      nomeCamisa: 'Cruzeiro',
      valor: 'R$ 300,00',
      imagem: '/assets/image/corta_vento-cruzeiro.jpeg'
    },
    {
      nomeCamisa: 'Flamengo',
      valor: 'R$ 300,00',
      imagem: '/assets/image/corta_vento-flamengo.jpeg'
    },
    {
      nomeCamisa: 'Inter Miami',
      valor: 'R$ 300,00',
      imagem: '/assets/image/corta_vento-inter_miami.jpeg'
    },
    {
      nomeCamisa: 'Itália',
      valor: 'R$ 300,00',
      imagem: '/assets/image/corta_vento-italia-1.jpeg'
    },
    {
      nomeCamisa: 'Itália',
      valor: 'R$ 300,00',
      imagem: '/assets/image/corta_vento-italia.jpeg'
    },
    {
      nomeCamisa: 'Manchester United',
      valor: 'R$ 300,00',
      imagem: '/assets/image/corta_vento-man_united-1.jpeg'
    },
    {
      nomeCamisa: 'Manchester United',
      valor: 'R$ 300,00',
      imagem: '/assets/image/corta_vento-man_united-2.jpeg'
    },
    {
      nomeCamisa: 'Manchester United',
      valor: 'R$ 300,00',
      imagem: '/assets/image/corta_vento-man_united.jpeg'
    },
    {
      nomeCamisa: 'Milan',
      valor: 'R$ 300,00',
      imagem: '/assets/image/corta_vento-milan.jpeg'
    },
    {
      nomeCamisa: 'Paris Saint-Germain',
      valor: 'R$ 300,00',
      imagem: '/assets/image/corta_vento-psg.jpeg'
    },
    {
      nomeCamisa: 'Real Madrid',
      valor: 'R$ 300,00',
      imagem: '/assets/image/corta_vento-real_madrid-2.jpeg'
    },
    {
      nomeCamisa: 'Real Madrid',
      valor: 'R$ 300,00',
      imagem: '/assets/image/corta_vento-real_madrid.jpeg'
    }
  ]
}
