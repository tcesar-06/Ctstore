import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body-login',
  standalone: true,
  imports: [],
  templateUrl: './body-login.component.html',
  styleUrl: './body-login.component.css'
})
export class BodyLoginComponent {

  constructor(private router: Router){

  }
  cadastro(){
    this.router.navigate(['cadastro'])
  }
}
