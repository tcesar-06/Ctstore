import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-layout-estoque',
  standalone: true,
  imports: [],
  templateUrl: './layout-estoque.component.html',
  styleUrl: './layout-estoque.component.css'
})
export class LayoutEstoqueComponent {
  constructor(private router: Router){

  }

  torcedor(){
    this.router.navigate(['torcedor'])
  }

}
