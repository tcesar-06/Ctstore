import { Component } from '@angular/core';
import { BotaoVoltarComponent } from '../../../components/botao-voltar/botao-voltar.component';
import { CommonModule } from '@angular/common';
import { CardProdutoComponent } from '../../../components/card-produto/card-produto.component';
import { LayoutFooterComponent } from '../../../layout/layout-footer/layout-footer.component';
import { LayoutHeaderComponent } from '../../../layout/layout-header/layout-header.component';

@Component({
  selector: 'app-estoque-short',
  standalone: true,
  imports: [LayoutHeaderComponent, LayoutFooterComponent, CardProdutoComponent, CommonModule, BotaoVoltarComponent],
  templateUrl: './estoque-short.component.html',
  styleUrl: './estoque-short.component.css'
})
export class EstoqueShortComponent {

  
  produtos = [
    {
      nomeCamisa: 'Short da Alemanha',
      valor: 'R$ 100,00',
      imagem: '/assets/image/short-alemanha.jpeg'
    },
    {
      nomeCamisa: 'Short da Argentina',
      valor: 'R$ 100,00',
      imagem: '/assets/image/short-argentina.jpeg'
    },
    {
      nomeCamisa: 'Short do Borussia',
      valor: 'R$ 100,00',
      imagem: '/assets/image/short-borussia.jpeg'
    },
    {
      nomeCamisa: 'Short Casual da Nike',
      valor: 'R$ 100,00',
      imagem: '/assets/image/short-casual_nike.jpeg'
    },
    {
      nomeCamisa: 'Short da Fiorentina',
      valor: 'R$ 100,00',
      imagem: '/assets/image/short-fiorentina.jpeg'
    },
    {
      nomeCamisa: 'Short do Flamengo',
      valor: 'R$ 100,00',
      imagem: '/assets/image/short-flamengo-1.jpeg'
    },
    {
      nomeCamisa: 'Short do Flamengo',
      valor: 'R$ 100,00',
      imagem: '/assets/image/short-flamengo.jpeg'
    },
    {
      nomeCamisa: 'Short da Inglaterra',
      valor: 'R$ 100,00',
      imagem: '/assets/image/short-inglaterra.jpeg'
    },
    {
      nomeCamisa: 'Short do Manchester United',
      valor: 'R$ 100,00',
      imagem: '/assets/image/short-man_united.jpeg'
    },
    {
      nomeCamisa: 'Short do Paris Saint-Germain',
      valor: 'R$ 100,00',
      imagem: '/assets/image/short-psg.jpeg'
    },
    {
      nomeCamisa: 'Short do Real Madrid',
      valor: 'R$ 100,00',
      imagem: '/assets/image/short-real_madrid.jpeg'
    }
  ]
}
