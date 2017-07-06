import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page/page404/page404.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './page/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    loadChildren: './home/home.module#HomeModule',
    canActivate: [AuthGuard]
  },
  { path: '', component: LoginComponent },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
    // , enableTracing: true
    // , useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

