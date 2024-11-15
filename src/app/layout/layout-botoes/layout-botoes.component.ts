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

  login(){
    this.router.navigate(['login'])
  }
}
