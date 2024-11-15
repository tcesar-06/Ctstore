import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutHeaderloginComponent } from '../../layout/layout-headerlogin/layout-headerlogin.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LayoutHeaderloginComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
}
