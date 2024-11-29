import { Component } from '@angular/core';
import { BotaoVoltarComponent } from '../../../components/botao-voltar/botao-voltar.component';
import { CommonModule } from '@angular/common';
import { CardProdutoComponent } from '../../../components/card-produto/card-produto.component';
import { LayoutFooterComponent } from '../../../layout/layout-footer/layout-footer.component';
import { LayoutHeaderComponent } from '../../../layout/layout-header/layout-header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estoque-retro',
  standalone: true,
  imports: [LayoutHeaderComponent, LayoutFooterComponent, CardProdutoComponent, CommonModule, BotaoVoltarComponent],
  templateUrl: './estoque-retro.component.html',
  styleUrl: './estoque-retro.component.css'
})
export class EstoqueRetroComponent {
  constructor(private router: Router) {

  }
  
  jogador() {
    this.router.navigate(['jogador']);
  }
  cortavento() {
    this.router.navigate(['cortavento']);
  }
  
  produtos = [
    {
      nomeCamisa: 'Argentina-I-2014',
      valor: 'R$ 180,00',
      imagem: '/assets/image/retro-argentina-1-2014.jpg'
    },
    {
      nomeCamisa: 'Barcelona-I-2006',
      valor: 'R$ 180,00',
      imagem: '/assets/image/retro-barcelona-1-2006.jpg'
    },
    {
      nomeCamisa: 'Barcelona-II-2006',
      valor: 'R$ 180,00',
      imagem: '/assets/image/retro-barcelona-2-2006.jpg'
    },
    {
      nomeCamisa: 'Brasil-I-2002',
      valor: 'R$ 180,00',
      imagem: '/assets/image/retro-brasil-1-2002.jpg'
    },
    {
      nomeCamisa: 'Brasil-I-2004',
      valor: 'R$ 180,00',
      imagem: '/assets/image/retro-brasil-1-2004.jpg'
    },
    {
      nomeCamisa: 'Brasil-II-2004',
      valor: 'R$ 180,00',
      imagem: '/assets/image/retro-brasil-2-2004.jpg'
    },
    {
      nomeCamisa: 'Fiorentina-I-1999',
      valor: 'R$ 180,00',
      imagem: '/assets/image/retro-fiorentina-1-1999.jpg'
    },
    {
      nomeCamisa: 'Flamengo-I-1992',
      valor: 'R$ 180,00',
      imagem: '/assets/image/retro-flamengo-1-1992.jpg'
    },
    {
      nomeCamisa: 'Flamengo-I-2008',
      valor: 'R$ 180,00',
      imagem: '/assets/image/retro-flamengo-1-2008.jpg'
    },
    {
      nomeCamisa: 'França-I-2006',
      valor: 'R$ 180,00',
      imagem: '/assets/image/retro-franca-1-2006.jpg'
    },
    {
      nomeCamisa: 'Grêmio-I-2001',
      valor: 'R$ 180,00',
      imagem: '/assets/image/retro-gremio-1-2001.jpg'
    },
    {
      nomeCamisa: 'Itália-I-1982',
      valor: 'R$ 180,00',
      imagem: '/assets/image/retro-italia-1-1982.jpg'
    },
    {
      nomeCamisa: 'Manchester United-I-2004',
      valor: 'R$ 180,00',
      imagem: '/assets/image/retro-man_united-1-2004.jpg'
    },
    {
      nomeCamisa: 'Milan-I-2006',
      valor: 'R$ 180,00',
      imagem: '/assets/image/retro-milan-1-2006.jpg'
    },    
    {
      nomeCamisa: 'Milan-II-2006',
      valor: 'R$ 180,00',
      imagem: '/assets/image/retro-milan-2-2006.jpg'
    },
    {
      nomeCamisa: 'Milan-I-2009',
      valor: 'R$ 180,00',
      imagem: '/assets/image/retro-milan-1-2009.jpg'
    },
    {
      nomeCamisa: 'Portugal-I-2012',
      valor: 'R$ 180,00',
      imagem: '/assets/image/retro-protugal-1-2012.jpg'
    },
    {
      nomeCamisa: 'Portugal-II-2004',
      valor: 'R$ 180,00',
      imagem: '/assets/image/retro-protugal-2-2004.jpg'
    },
    {
      nomeCamisa: 'Real Madrid-I-1986',
      valor: 'R$ 180,00',
      imagem: '/assets/image/retro-real_madrid-1-1986.jpg'
    },
    {
      nomeCamisa: 'Santos-I-2011',
      valor: 'R$ 180,00',
      imagem: '/assets/image/retro-santos-1-2011.jpg'
    },
    {
      nomeCamisa: 'Sporting-I-2003',
      valor: 'R$ 180,00',
      imagem: '/assets/image/retro-sporting-1-2003.jpg'
    }
  ]
}
