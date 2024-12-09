import { Component } from '@angular/core';
import { LayoutHeaderComponent } from '../../layout/layout-header/layout-header.component';
import { BodyPerfilComponent } from '../../components/body-perfil/body-perfil.component';
import { LayoutFooterComponent } from '../../layout/layout-footer/layout-footer.component';


@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [LayoutHeaderComponent, BodyPerfilComponent, LayoutFooterComponent],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {

}
