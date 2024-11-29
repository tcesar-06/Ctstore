import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-botoes',
  standalone: true,
  imports: [],
  templateUrl: './layout-botoes.component.html',
  styleUrl: './layout-botoes.component.css'
})
export class LayoutBotoesComponent {
  constructor(private router: Router){

  }

  estoque_geral(){
    this.router.navigate(['estoque-geral'])
  }
  torcedor(){
    this.router.navigate(['torcedor'])
  }
  jogador(){
    this.router.navigate(['jogador'])
  }
  retro(){
    this.router.navigate(['retro'])
  }
  cortavento(){
    this.router.navigate(['cortavento'])
  }
  short(){
    this.router.navigate(['short'])
  }
  nba(){
    this.router.navigate(['nba'])
  }
  infantil(){
    this.router.navigate(['infantil'])
  }
  baby(){
    this.router.navigate(['baby'])
  }
 
}
