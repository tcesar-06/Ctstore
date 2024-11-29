import { Component } from '@angular/core';
import { BotaoVoltarComponent } from '../../../components/botao-voltar/botao-voltar.component';
import { CommonModule } from '@angular/common';
import { CardProdutoComponent } from '../../../components/card-produto/card-produto.component';
import { LayoutFooterComponent } from '../../../layout/layout-footer/layout-footer.component';
import { LayoutHeaderComponent } from '../../../layout/layout-header/layout-header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estoque-baby',
  standalone: true,
  imports: [LayoutHeaderComponent, LayoutFooterComponent, CardProdutoComponent, CommonModule, BotaoVoltarComponent],
  templateUrl: './estoque-baby.component.html',
  styleUrl: './estoque-baby.component.css'
})
export class EstoqueBabyComponent {

  constructor(private router: Router) {

  }

  infantil() {
    this.router.navigate(['infantil']);
  }
  estoqueGeral() {
    this.router.navigate(['estoque-geral']);
  }

  produtos = [
    {
      nomeCamisa: 'Al-Nassar Bebê',
      valor: 'R$ 150,00',
      imagem: '/assets/image/baby-al_nassar.jpeg'
    },
    {
      nomeCamisa: 'Alemanha Bebê',
      valor: 'R$ 150,00',
      imagem: '/assets/image/baby-alemanha.jpeg'
    },
    {
      nomeCamisa: 'Argentina Bebê',
      valor: 'R$ 150,00',
      imagem: '/assets/image/baby-argentina.jpeg'
    },
    {
      nomeCamisa: 'Barcelona Bebê',
      valor: 'R$ 150,00',
      imagem: '/assets/image/baby-barcelona.jpeg'
    },
    {
      nomeCamisa: 'Brasil Bebê',
      valor: 'R$ 150,00',
      imagem: '/assets/image/baby-brasil.jpeg'
    },
    {
      nomeCamisa: 'França Bebê',
      valor: 'R$ 150,00',
      imagem: '/assets/image/baby-franca.jpeg'
    },
    {
      nomeCamisa: 'Inter Miami Bebê',
      valor: 'R$ 150,00',
      imagem: '/assets/image/baby-inter_miami-1.jpeg'
    },
    {
      nomeCamisa: 'Inter Miami Bebê',
      valor: 'R$ 150,00',
      imagem: '/assets/image/baby-inter_miami-2.jpeg'
    },
    {
      nomeCamisa: 'Itália Bebê',
      valor: 'R$ 150,00',
      imagem: '/assets/image/baby-italia.jpeg'
    },
    {
      nomeCamisa: 'Portugal Bebê',
      valor: 'R$ 150,00',
      imagem: '/assets/image/baby-portugal-1.jpeg'
    },
    {
      nomeCamisa: 'Portugal Bebê',
      valor: 'R$ 150,00',
      imagem: '/assets/image/baby-portugal-2.jpeg'
    },
    {
      nomeCamisa: 'paris saint-germain Bebê',
      valor: 'R$ 150,00',
      imagem: '/assets/image/baby-psg.jpeg'
    },
    {
      nomeCamisa: 'Real Madrid Bebê',
      valor: 'R$ 150,00',
      imagem: '/assets/image/baby-real_madrid.jpeg'
    }
  ]
}
