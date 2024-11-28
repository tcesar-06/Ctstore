import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  standalone: true,
  imports: [],
  templateUrl: './card-produto.component.html',
  styleUrl: './card-produto.component.css'
})
export class CardProdutoComponent {

  @Input() nomeCamisa: string = '';
  @Input() valor: string = '';
  @Input() imagem: string = '';
}
