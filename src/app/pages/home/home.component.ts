import { Component } from '@angular/core';
import { LayoutBotoesComponent } from '../../layout/layout-botoes/layout-botoes.component';
import { LayoutFooterComponent } from '../../layout/layout-footer/layout-footer.component';
import { LayoutHeaderComponent } from '../../layout/layout-header/layout-header.component';
import { BodyComponent } from '../../components/body/body.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LayoutBotoesComponent, LayoutFooterComponent, LayoutHeaderComponent, BodyComponent, RouterOutlet],
templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}

