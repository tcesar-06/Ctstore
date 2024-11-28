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
  constructor(private router: Router){

  }

  estoque_geral(){
    this.router.navigate(['estoque-geral'])
  }
  jogador(){
    this.router.navigate(['jogador'])
  }
}
