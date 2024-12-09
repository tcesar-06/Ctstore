import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { EstoqueGeralComponent } from './pages/Estoque/estoque-geral/estoque-geral.component';
import { EstoqueTorcedorComponent } from './pages/Estoque/estoque-torcedor/estoque-torcedor.component';
import { EstoqueJogadorComponent } from './pages/Estoque/estoque-jogador/estoque-jogador.component';
import { EstoqueRetroComponent } from './pages/Estoque/estoque-retro/estoque-retro.component';
import { EstoqueCortaventoComponent } from './pages/Estoque/estoque-cortavento/estoque-cortavento.component';
import { EstoqueShortComponent } from './pages/Estoque/estoque-short/estoque-short.component';
import { EstoqueNbaComponent } from './pages/Estoque/estoque-nba/estoque-nba.component';
import { EstoqueInfantilComponent } from './pages/Estoque/estoque-infantil/estoque-infantil.component';
import { EstoqueBabyComponent } from './pages/Estoque/estoque-baby/estoque-baby.component';
import { LoginHomeComponent } from './pages/login-home/login-home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';



export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login-home', component: LoginHomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'estoque-geral', component: EstoqueGeralComponent },
  { path: 'torcedor', component: EstoqueTorcedorComponent },
  { path: 'jogador', component: EstoqueJogadorComponent },
  { path: 'retro', component: EstoqueRetroComponent },
  { path: 'cortavento', component: EstoqueCortaventoComponent },
  { path: 'nba', component: EstoqueNbaComponent },
  { path: 'infantil', component: EstoqueInfantilComponent },
  { path: 'baby', component: EstoqueBabyComponent },
  { path: 'short', component: EstoqueShortComponent },
];
