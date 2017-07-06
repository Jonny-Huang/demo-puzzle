import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: MainComponent },
      { path: 'about', component: AboutComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
