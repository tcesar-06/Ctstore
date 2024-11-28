import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-inicial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-inicial.component.html',
  styleUrl: './card-inicial.component.css'
})
export class CardInicialComponent {

  @Input() imagem: string = '';
}
