import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdIconModule, MdInputModule } from '@angular/material';
// import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';
import 'hammerjs';
import { Page404Component } from './page/page404/page404.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './page/login/login.component';
import { UserProfileService } from './service/user-profile.service';
import { TodoService } from './todo/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MdIconModule,
    MdInputModule,
    // HomeModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    UserProfileService,
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
