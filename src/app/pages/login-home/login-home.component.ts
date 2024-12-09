import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardInicialComponent } from '../../components/card-inicial/card-inicial.component';
import { RouterOutlet } from '@angular/router';
import { BodyComponent } from '../../components/body/body.component';
import { LayoutHeaderComponent } from '../../layout/layout-header/layout-header.component';
import { LayoutFooterComponent } from '../../layout/layout-footer/layout-footer.component';
import { LayoutBotoesComponent } from '../../layout/layout-botoes/layout-botoes.component';

@Component({
  selector: 'app-login-home',
  standalone: true,
  imports: [LayoutBotoesComponent, LayoutFooterComponent, LayoutHeaderComponent, BodyComponent, RouterOutlet, CardInicialComponent, CommonModule],
  templateUrl: './login-home.component.html',
  styleUrl: './login-home.component.css'
})
export class LoginHomeComponent {
  produtos = [
    {
      imagem: '/assets/image/torcedor-argentina-1-2024.jpg'
    },
    {
      imagem: '/assets/image/torcedor-flamengo-conciencia_negra-2024.jpg'
    },
    {
      imagem: '/assets/image/torcedor-corinthians-1-2024.jpg'
    },
    {
      imagem: '/assets/image/torcedor-inter_milan-1-2024.jpeg'
    },
    {
      imagem: '/assets/image/torcedor-vasco-100anos-2024.jpg'
    }
  ]
}
