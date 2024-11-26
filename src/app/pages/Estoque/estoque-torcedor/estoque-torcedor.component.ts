import { Component } from '@angular/core';
import { LayoutHeaderComponent } from '../../../layout/layout-header/layout-header.component';
import { LayoutFooterComponent } from '../../../layout/layout-footer/layout-footer.component';
import { CardsEmLinhaComponent } from '../../../components/cards-em-linha/cards-em-linha.component';

@Component({
  selector: 'app-estoque-torcedor',
  standalone: true,
  imports: [LayoutHeaderComponent, LayoutFooterComponent, CardsEmLinhaComponent],
  templateUrl: './estoque-torcedor.component.html',
  styleUrl: './estoque-torcedor.component.css'
})
export class EstoqueTorcedorComponent {

}
