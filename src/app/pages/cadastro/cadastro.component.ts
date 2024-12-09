import { Component } from '@angular/core';
import { LayoutHeaderloginComponent } from '../../layout/layout-headerlogin/layout-headerlogin.component';
import { LayoutFooterComponent } from '../../layout/layout-footer/layout-footer.component';
import { BodyCadastroComponent } from '../../components/body-cadastro/body-cadastro.component';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [LayoutHeaderloginComponent, LayoutFooterComponent, BodyCadastroComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

}
