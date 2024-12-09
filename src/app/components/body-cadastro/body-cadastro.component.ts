import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body-cadastro',
  standalone: true,
  imports: [],
  templateUrl: './body-cadastro.component.html',
  styleUrl: './body-cadastro.component.css'
})
export class BodyCadastroComponent {

  constructor(private router: Router){

  }

  loginHome(){
    this.router.navigate(['login-home'])
  }

}
