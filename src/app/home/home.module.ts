import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { MainComponent } from './main/main.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MdToolbarModule,
  MdIconModule,
  MdMenuModule,
  MdButtonModule,
  MdListModule,
  MdChipsModule,
  MdTooltipModule
} from '@angular/material';
import { AboutComponent } from './about/about.component';
import { routing } from './home.routing';
import { HomeService } from './home.service';
import { TodoModule } from '../todo/todo.module';

@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdIconModule,
    MdMenuModule,
    MdButtonModule,
    MdListModule,
    MdChipsModule,
    MdTooltipModule,
    FlexLayoutModule,
    TodoModule,
    routing
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    AsideComponent,
    MainComponent,
    AboutComponent
  ],
  providers: [HomeService]
})
export class HomeModule { }
