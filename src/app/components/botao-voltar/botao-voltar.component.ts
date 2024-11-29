import { Component, input, Input, Output, output } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-botao-voltar',
  standalone: true,
  imports: [],
  templateUrl: './botao-voltar.component.html',
  styleUrl: './botao-voltar.component.css'
})
export class BotaoVoltarComponent {

  @Input() titulo: string = '';
  @Input() proximo: () => void = () => {};
  @Input() anterior: () => void = () => {};

  constructor(private router: Router){

  }

  navegarAnterior() {
    if (this.anterior) {
      this.anterior();
    }
  }

  navegarProximo() {
    if (this.proximo) {
      this.proximo();
    }
  }
}
