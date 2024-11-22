import { Component } from '@angular/core';
import { LayoutBotoesComponent } from '../../layout/layout-botoes/layout-botoes.component';
import { LayoutFooterComponent } from '../../layout/layout-footer/layout-footer.component';
import { LayoutHeaderComponent } from '../../layout/layout-header/layout-header.component';

@Component({
  selector: 'app-estoque-geral',
  standalone: true,
  imports: [LayoutHeaderComponent, LayoutFooterComponent, LayoutBotoesComponent],
  templateUrl: './estoque-geral.component.html',
  styleUrl: './estoque-geral.component.css'
})
export class EstoqueGeralComponent {

}
