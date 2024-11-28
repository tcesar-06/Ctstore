import { Component } from '@angular/core';
import { LayoutHeaderComponent } from '../../../layout/layout-header/layout-header.component';
import { LayoutFooterComponent } from '../../../layout/layout-footer/layout-footer.component';
import { CardProdutoComponent } from '../../../components/card-produto/card-produto.component';
import { CommonModule } from '@angular/common';
import { BotaoVoltarComponent } from '../../../components/botao-voltar/botao-voltar.component';

@Component({
  selector: 'app-estoque-jogador',
  standalone: true,
  imports: [LayoutHeaderComponent, LayoutFooterComponent, CardProdutoComponent, CommonModule, BotaoVoltarComponent],
  templateUrl: './estoque-jogador.component.html',
  styleUrl: './estoque-jogador.component.css'
})
export class EstoqueJogadorComponent {

  

  produtos = [
    {
      nomeCamisa: 'Al-Nassar-I-2024',
      valor: 'R$ 180,00',
      imagem: '/assets/image/jogador-al_nassar-3-2024.jpg'
    },
    {
      nomeCamisa: 'Alemanha-I-2024',
      valor: 'R$ 180,00',
      imagem: '/assets/image/jogador-alemanha-1-2024.jpg'
    },
    {
      nomeCamisa: 'Argentina-Especial-2024',
      valor: 'R$ 180,00',
      imagem: '/assets/image/jogador-argentina-50anos_adidas-2024.jpeg'
    },
    {
      nomeCamisa: 'Atlético de Madrid-II-2024',
      valor: 'R$ 180,00',
      imagem: '/assets/image/jogador-atletico_madrid-2-2024.jpg'
    },
    {
      nomeCamisa: 'Barcelona-II-2024',
      valor: 'R$ 180,00',
      imagem: '/assets/image/jogador-barcelona-2-2024.jpg'
    },
    {
      nomeCamisa: 'Bayer Leverkusen-I-2024',
      valor: 'R$ 180,00',
      imagem: '/assets/image/jogador-leverkusen-1-2024.jpg'
    },
    {
      nomeCamisa: 'Bayern de München-I-2024',
      valor: 'R$ 180,00',
      imagem: '/assets/image/jogador-bayern-1-2024.jpeg'
    },
    {
      nomeCamisa: 'Borussia Dortmund-I-2024',
      valor: 'R$ 180,00',
      imagem: '/assets/image/jogador-borussia-1-2024.jpg'
    },
    {
      nomeCamisa: 'Brasil-I-2024',
      valor: 'R$ 180,00',
      imagem: '/assets/image/jogador-brasil-1-2024.jpeg'
    },
    {
      nomeCamisa: 'Colombia-I-2024',
      valor: 'R$ 180,00',
      imagem: '/assets/image/jogador-colombia-1-2024.jpeg'
    },
    {
      nomeCamisa: 'Corinthians-II-2024',
      valor: 'R$ 180,00',
      imagem: '/assets/image/jogador-corinthians-2-2024.jpeg'
    },
    {
      nomeCamisa: 'Flamengo-I-2024',
      valor: 'R$ 180,00',
      imagem: '/assets/image/jogador-flamengo-1-2024.jpg'
    },
    {
      nomeCamisa: 'Inter de Milão-I-2023',
      valor: 'R$ 180,00',
      imagem: '/assets/image/jogador-inter_milan-1-2023.jpg'
    },
    {
      nomeCamisa: 'Juventus-I-2024',
      valor: 'R$ 180,00',
      imagem: '/assets/image/jogador-juventus-1-2024.jpg'
    },    
    {
      nomeCamisa: 'Manchester City-I-2024',
      valor: 'R$ 180,00',
      imagem: '/assets/image/jogador-man_city-1-2024.jpg'
    },
    {
      nomeCamisa: 'Manchester United-III-2024',
      valor: 'R$ 180,00',
      imagem: '/assets/image/jogador-man_united-3-2024.jpg'
    },
    {
      nomeCamisa: 'Milan-IV-2024',
      valor: 'R$ 180,00',
      imagem: '/assets/image/jogador-milan-4-2024.jpg'
    },
    {
      nomeCamisa: 'Palmeiras-I-2024',
      valor: 'R$ 180,00',
      imagem: '/assets/image/jogador-palmeiras-100anos-1-2024.jpeg'
    },
    {
      nomeCamisa: 'Real Madrid-I-2024',
      valor: 'R$ 180,00',
      imagem: '/assets/image/jogador-real_madrid-1-2024.jpg'
    },
    {
      nomeCamisa: 'São Paulo-I-2024',
      valor: 'R$ 180,00',
      imagem: '/assets/image/jogador-sao_paulo-1-2024.jpeg'
    },
    {
      nomeCamisa: 'Sporting-I-2024',
      valor: 'R$ 180,00',
      imagem: '/assets/image/jogador-sporting-1-2024.jpg'
    },
    {
      nomeCamisa: 'Wolverhampton-I-2024',
      valor: 'R$ 180,00',
      imagem: '/assets/image/jogador-wolverhampton-1-2024.jpg'
    }
  ]
}
