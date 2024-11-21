import { Component } from '@angular/core';
import { LayoutBotoesComponent } from '../../layout/layout-botoes/layout-botoes.component';
import { LayoutFooterComponent } from '../../layout/layout-footer/layout-footer.component';
import { LayoutHeaderComponent } from '../../layout/layout-header/layout-header.component';
import { BodyComponent } from '../../components/body/body.component';
import { RouterOutlet } from '@angular/router';
import { CardInicialComponent } from '../../components/card-inicial/card-inicial.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LayoutBotoesComponent, LayoutFooterComponent, LayoutHeaderComponent, BodyComponent, RouterOutlet, CardInicialComponent],
templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}

