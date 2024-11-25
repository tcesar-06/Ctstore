import { Component } from '@angular/core';
import { LayoutHeaderComponent } from '../../../layout/layout-header/layout-header.component';
import { LayoutFooterComponent } from '../../../layout/layout-footer/layout-footer.component';
import { LayoutEstoqueComponent } from '../../../layout/layout-estoque/layout-estoque.component';

@Component({
  selector: 'app-estoque-geral',
  standalone: true,
  imports: [LayoutHeaderComponent, LayoutFooterComponent, LayoutEstoqueComponent],
  templateUrl: './estoque-geral.component.html',
  styleUrl: './estoque-geral.component.css'
})
export class EstoqueGeralComponent {

}
