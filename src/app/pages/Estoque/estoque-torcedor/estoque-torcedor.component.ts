import { Component, Output, output } from '@angular/core';
import { LayoutHeaderComponent } from '../../../layout/layout-header/layout-header.component';
import { LayoutFooterComponent } from '../../../layout/layout-footer/layout-footer.component';
import { CardProdutoComponent } from '../../../components/card-produto/card-produto.component';
import { CommonModule } from '@angular/common';
import { BotaoVoltarComponent } from '../../../components/botao-voltar/botao-voltar.component';

@Component({
  selector: 'app-estoque-torcedor',
  standalone: true,
  imports: [LayoutHeaderComponent, LayoutFooterComponent, CardProdutoComponent, CommonModule, BotaoVoltarComponent],
templateUrl: './estoque-torcedor.component.html',
  styleUrl: './estoque-torcedor.component.css'
})
export class EstoqueTorcedorComponent {


  produtos = [
    {
      nomeCamisa: 'Alemanha - II - 2020',
      valor: 'R$ 127,00',
      imagem: '/assets/image/torcedor-alemanha-2-2020.jpg'
    },
    {
      nomeCamisa: 'Alemanha - I - 2020',
      valor: 'R$ 127,00',
      imagem: '/assets/image/torcedor-alemanha.jpg'
    },
    {
      nomeCamisa: 'Argentina - I - 2024',
      valor: 'R$ 127,00',
      imagem: '/assets/image/torcedor-argentina-1-2024.jpg'
    },
    {
      nomeCamisa: 'Argentina - II - 2024',
      valor: 'R$ 127,00',
      imagem: '/assets/image/torcedor-argentina-2-2024.jpg'
    },
    {
      nomeCamisa: 'Arsenal - I - 2024',
      valor: 'R$ 127,00',
      imagem: '/assets/image/torcedor-arsenal-1-2024.jpg'
    },
    {
      nomeCamisa: 'Atlético Mineiro - I - 2024',
      valor: 'R$ 127,00',
      imagem: '/assets/image/torcedor-atletico_mineiro-1-2024.jpg'
    },
    {
      nomeCamisa: 'Atlético Mineiro - II - 2024',
      valor: 'R$ 127,00',
      imagem: '/assets/image/torcedor-atletico_mineiro-2-2024.jpg'
    },
    {
      nomeCamisa: 'Bahia - I - 2024',
      valor: 'R$ 127,00',
      imagem: '/assets/image/torcedor-bahia-1-2024.jpg'
    },
    {
      nomeCamisa: 'Bahia - II - 2024',
      valor: 'R$ 127,00',
      imagem: '/assets/image/torcedor-bahia-2-2024.jpg'
    },
    {
      nomeCamisa: 'Barcelona - I - 2024',
      valor: 'R$ 127,00',
      imagem: '/assets/image/torcedor-barcelona-1-2024.png'
    },
    {
      nomeCamisa: 'Barcelona - II - 2024',
      valor: 'R$ 127,00',
      imagem: '/assets/image/torcedor-barcelona-2-2024.png'
    },
    {
      nomeCamisa: 'Benfica - I - 2024',
      valor: 'R$ 127,00',
      imagem: '/assets/image/torcedor-benfica-1-2024.jpg'
    },
    {
      nomeCamisa: 'Benfica - II - 2024',
      valor: 'R$ 127,00',
      imagem: '/assets/image/torcedor-benfica-2-2024.jpg'
    },
    {
      nomeCamisa: 'Botafogo - I - 2024',
      valor: 'R$ 127,00',
      imagem: '/assets/image/torcedor-botafogo-1-2024.jpg'
    },
    {
      nomeCamisa: 'Botafogo - II - 2024',
      valor: 'R$ 127,00',
      imagem: '/assets/image/torcedor-botafogo-2-2024.jpg'
    },
    {
      nomeCamisa: 'Botafogo Regata - 2024',
      valor: 'R$ 127,00',
      imagem: '/assets/image/torcedor-botafogo-regata-1-2024.jpg'
    },
    {
      nomeCamisa: 'Brasil - I - 2022',
      valor: 'R$ 127,00',
      imagem: '/assets/image/torcedor-brasil-1-2022.jpg'
    },
    {
      nomeCamisa: 'Brasil - II - 2022',
      valor: 'R$ 127,00',
      imagem: '/assets/image/torcedor-brasil-2-2022.jpg'
    },
    {
      nomeCamisa: 'Brasil - I - 2024',
      valor: 'R$ 127,00',
      imagem: '/assets/image/torcedor-brasil-1-2024.jpeg'
    },
    {
      nomeCamisa: 'Brasil - II - 2024',
      valor: 'R$ 127,00',
      imagem: '/assets/image/torcedor-brasil-2-2024.jpg'
    },
    {
      nomeCamisa: 'Corinthians - I - 2024',
      valor: 'R$ 127,00',
      imagem: '/assets/image/torcedor-corinthians-1-2024.jpg'
    },
    {
      nomeCamisa: 'Corinthians - II - 2024',
      valor: 'R$ 127,00',
      imagem: '/assets/image/torcedor-corinthians-2-2024.jpg'
    },
    {
      nomeCamisa: 'Corinthians - III - 2024',
      valor: 'R$ 127,00',
      imagem: '/assets/image/torcedor-corinthians-3-2024.jpg'
    }
  ]
}

