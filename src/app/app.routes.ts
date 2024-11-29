import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { EstoqueGeralComponent } from './pages/Estoque/estoque-geral/estoque-geral.component';
import { EstoqueTorcedorComponent } from './pages/Estoque/estoque-torcedor/estoque-torcedor.component';
import { EstoqueJogadorComponent } from './pages/Estoque/estoque-jogador/estoque-jogador.component';
import { EstoqueRetroComponent } from './pages/Estoque/estoque-retro/estoque-retro.component';
import { EstoqueCortaventoComponent } from './pages/Estoque/estoque-cortavento/estoque-cortavento.component';
import { EstoqueShortComponent } from './pages/Estoque/estoque-short/estoque-short.component';



export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'estoque-geral', component: EstoqueGeralComponent },
  { path: 'torcedor', component: EstoqueTorcedorComponent },
  { path: 'jogador', component: EstoqueJogadorComponent },
  { path: 'retro', component: EstoqueRetroComponent },
  { path: 'cortavento', component: EstoqueCortaventoComponent },
  { path: 'short', component: EstoqueShortComponent },
];
