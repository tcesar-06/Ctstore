import { Component } from '@angular/core';
import { BotaoVoltarComponent } from '../../../components/botao-voltar/botao-voltar.component';
import { CommonModule } from '@angular/common';
import { CardProdutoComponent } from '../../../components/card-produto/card-produto.component';
import { LayoutFooterComponent } from '../../../layout/layout-footer/layout-footer.component';
import { LayoutHeaderComponent } from '../../../layout/layout-header/layout-header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estoque-nba',
  standalone: true,
  imports: [LayoutHeaderComponent, LayoutFooterComponent, CardProdutoComponent, CommonModule, BotaoVoltarComponent],
  templateUrl: './estoque-nba.component.html',
  styleUrl: './estoque-nba.component.css'
})
export class EstoqueNbaComponent {

  constructor(private router: Router) {

  }

  short() {
    this.router.navigate(['short']);
  }
  infantil() {
    this.router.navigate(['infantil']);
  }

  produtos = [
    {
      nomeCamisa: 'Boston Celtics - nº0',
      valor: 'R$ 220,00',
      imagem: '/assets/image/NBA-boston_celtics-0.jpg'
    },
    {
      nomeCamisa: 'Boston Celtics - nº7',
      valor: 'R$ 220,00',
      imagem: '/assets/image/NBA-boston_celtics-7.jpg'
    },
    {
      nomeCamisa: 'Milwaukee Bucks - nº34',
      valor: 'R$ 220,00',
      imagem: '/assets/image/NBA-bucks-34.jpg'
    },
    {
      nomeCamisa: 'Chicago Bulls - nº1',
      valor: 'R$ 220,00',
      imagem: '/assets/image/NBA-chicago_bulls-1.jpg'
    },
    {
      nomeCamisa: 'Chicago Bulls - nº2',
      valor: 'R$ 220,00',
      imagem: '/assets/image/NBA-chicago_bulls-2.jpg'
    },
    {
      nomeCamisa: 'Chicago Bulls - nº11',
      valor: 'R$ 220,00',
      imagem: '/assets/image/NBA-chicago_bulls-11.jpg'
    },
    {
      nomeCamisa: 'Chicago Bulls - nº91',
      valor: 'R$ 220,00',
      imagem: '/assets/image/NBA-chicago_bulls-91.jpg'
    },
    {
      nomeCamisa: 'Golden Stace Warriors - nº3',
      valor: 'R$ 220,00',
      imagem: '/assets/image/NBA-Golden_State-3.jpg'
    },
    {
      nomeCamisa: 'Golden Stace Warriors - nº11',
      valor: 'R$ 220,00',
      imagem: '/assets/image/NBA-Golden_State-11.jpg'
    },
    {
      nomeCamisa: 'Golden Stace Warriors - nº11',
      valor: 'R$ 220,00',
      imagem: '/assets/image/NBA-new_warriors-11.jpg'
    },
    {
      nomeCamisa: 'Golden Stace Warriors - nº11',
      valor: 'R$ 220,00',
      imagem: '/assets/image/NBA-oaklands-11.jpg'
    },
    {
      nomeCamisa: 'Los Angeles Lakers - nº6',
      valor: 'R$ 220,00',
      imagem: '/assets/image/NBA-lakers-6.jpg'
    },
    {
      nomeCamisa: 'Los Angeles Lakers - nº23',
      valor: 'R$ 220,00',
      imagem: '/assets/image/NBA-lakers-23-preta.jpg'
    },
    {
      nomeCamisa: 'Los Angeles Lakers - nº23',
      valor: 'R$ 220,00',
      imagem: '/assets/image/NBA-lakers-23.jpg'
    },
    {
      nomeCamisa: 'Los Angeles Lakers - nº24',
      valor: 'R$ 220,00',
      imagem: '/assets/image/NBA-lakers-24.jpg'
    },
    {
      nomeCamisa: 'Los Angeles Lakers - nº39',
      valor: 'R$ 220,00',
      imagem: '/assets/image/NBA-lakers-39.jpg'
    },
    {
      nomeCamisa: 'Los Angeles Lakers - nº95',
      valor: 'R$ 220,00',
      imagem: '/assets/image/NBA-lakers-95.jpg'
    },
    {
      nomeCamisa: 'Miami Heat - nº22',
      valor: 'R$ 220,00',
      imagem: '/assets/image/NBA-miami_heat-22.jpg'
    },
    
    {
      nomeCamisa: 'Phoenix Suns - nº13',
      valor: 'R$ 220,00',
      imagem: '/assets/image/NBA-phoenix-13.jpg'
    }
  ]
}
