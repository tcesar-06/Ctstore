import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-header',
  standalone: true,
  imports: [],
  templateUrl: './layout-header.component.html',
  styleUrl: './layout-header.component.css'
})
export class LayoutHeaderComponent {
  constructor(private router: Router){

  }

  login(){
    this.router.navigate(['login'])
  }
}
