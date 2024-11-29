import { Component } from '@angular/core';
import { BotaoVoltarComponent } from '../../../components/botao-voltar/botao-voltar.component';
import { CommonModule } from '@angular/common';
import { CardProdutoComponent } from '../../../components/card-produto/card-produto.component';
import { LayoutFooterComponent } from '../../../layout/layout-footer/layout-footer.component';
import { LayoutHeaderComponent } from '../../../layout/layout-header/layout-header.component';

@Component({
  selector: 'app-estoque-infantil',
  standalone: true,
  imports: [LayoutHeaderComponent, LayoutFooterComponent, CardProdutoComponent, CommonModule, BotaoVoltarComponent],
  templateUrl: './estoque-infantil.component.html',
  styleUrl: './estoque-infantil.component.css'
})
export class EstoqueInfantilComponent {

  produtos = [
    {
      nomeCamisa: 'Alemanha - I - 2020',
      valor: 'R$ 140,00',
      imagem: '/assets/image/infantil-alemanha-1-2024.jpeg'
    },
    {
      nomeCamisa: 'Barcelona - I - 2020',
      valor: 'R$ 140,00',
      imagem: '/assets/image/infantil-barcelona-1-2024.jpeg'
    },
    {
      nomeCamisa: 'Bayern - I - 2024',
      valor: 'R$ 140,00',
      imagem: '/assets/image/infantil-bayern-2-2023.jpeg'
    },
    {
      nomeCamisa: 'Brasil - I - 2024',
      valor: 'R$ 140,00',
      imagem: '/assets/image/infantil-brasil-1-2024.jpeg'
    },
    {
      nomeCamisa: 'Corinthians - I - 2024',
      valor: 'R$ 140,00',
      imagem: '/assets/image/infantil-corinthians-1-2024.jpeg'
    },
    {
      nomeCamisa: 'Cruzeiro - I - 2024',
      valor: 'R$ 140,00',
      imagem: '/assets/image/infantil-cruzeiro-1-2024.jpeg'
    },
    {
      nomeCamisa: 'Flamengo - I - 2024',
      valor: 'R$ 140,00',
      imagem: '/assets/image/infantil-flamengo-1-2024.jpeg'
    },
    {
      nomeCamisa: 'França - I - 2023',
      valor: 'R$ 140,00',
      imagem: '/assets/image/infantil-franca-1-2023.jpeg'
    },
    {
      nomeCamisa: 'Inglaterra - II - 2024',
      valor: 'R$ 140,00',
      imagem: '/assets/image/infantil-inglaterra-1-2024.jpeg'
    },
    {
      nomeCamisa: 'Inter Miami - I - 2024',
      valor: 'R$ 140,00',
      imagem: '/assets/image/infantil-inter_miami-1-2024.jpeg'
    },
    {
      nomeCamisa: 'Inter Miami - II - 2024',
      valor: 'R$ 140,00',
      imagem: '/assets/image/infantil-inter_miami-2-2024.jpeg'
    },
    {
      nomeCamisa: 'Itália - I - 2024',
      valor: 'R$ 140,00',
      imagem: '/assets/image/infantil-italia-1-2024.jpeg'
    },
    {
      nomeCamisa: 'Juventus - I - 2024',
      valor: 'R$ 140,00',
      imagem: '/assets/image/infantil-juventus-1-2024.jpeg'
    },
    {
      nomeCamisa: 'Palmeiras - I - 2024',
      valor: 'R$ 140,00',
      imagem: '/assets/image/infantil-palmeiras-1-2024.jpeg'
    },
    {
      nomeCamisa: 'Portugal - I - 2024',
      valor: 'R$ 140,00',
      imagem: '/assets/image/infantil-portugal-1-2024.jpeg'
    },
    {
      nomeCamisa: 'Real Madrid - I - 2024',
      valor: 'R$ 140,00',
      imagem: '/assets/image/infantil-real_madrid-1-2024.jpeg'
    },
    {
      nomeCamisa: 'Real Madrid - III - 2024',
      valor: 'R$ 140,00',
      imagem: '/assets/image/infantil-real_madrid-3-2024.jpeg'
    },
    {
      nomeCamisa: 'São Paulo - I - 2024',
      valor: 'R$ 140,00',
      imagem: '/assets/image/infantil-sao_paulo-1-2024.jpeg'
    },
    {
      nomeCamisa: 'Sporting - I - 2024',
      valor: 'R$ 140,00',
      imagem: '/assets/image/infantil-sporting-1-2024.jpeg'
    },
    {
      nomeCamisa: 'Vasco - I - 2024',
      valor: 'R$ 140,00',
      imagem: '/assets/image/infantil-Vasco-1-2024.jpeg'
    }
  ]
}
