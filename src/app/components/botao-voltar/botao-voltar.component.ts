import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
}
