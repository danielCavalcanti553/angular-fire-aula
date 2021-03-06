import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LivrosComponent } from './livros/livros.component';
import { LivrosViewComponent } from './livros-view/livros-view.component';
import { LogoutComponent } from './logout/logout.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { 
    path: 'livros', 
    component: LivrosComponent,
    canActivate : [AngularFireAuthGuard],
    data : {authGuardPipe : redirectToLogin}
  
  },
  { 
    path: 'livros/:id', component: LivrosViewComponent,
    canActivate : [AngularFireAuthGuard],
    data : {authGuardPipe : redirectToLogin}
  
  },
  { 
    path: 'logout', 
    component: LogoutComponent,
    canActivate : [AngularFireAuthGuard],
    data : {authGuardPipe : redirectToLogin} 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
