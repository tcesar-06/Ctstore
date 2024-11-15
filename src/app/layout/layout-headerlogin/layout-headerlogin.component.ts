import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-headerlogin',
  standalone: true,
  imports: [],
  templateUrl: './layout-headerlogin.component.html',
  styleUrl: './layout-headerlogin.component.css'
})
export class LayoutHeaderloginComponent {
  constructor(private router: Router){

  }
  home(){
    this.router.navigate(['home'])
  }
}
