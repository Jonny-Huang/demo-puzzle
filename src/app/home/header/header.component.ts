import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../../service/user-profile.service';
import { HomeService } from '../home.service';
import { TodoService } from '../../todo/todo.service';

@Component({
  selector: 'home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
    public userProfileService: UserProfileService,
    private homeService: HomeService,
    public todoService: TodoService) { }

  ngOnInit() { }

  navAbout() {
    this.router.navigate(['./about']);
  }

  onLogout() {
    this.userProfileService.isLogin = false;
    this.router.navigate(['./login']);
  }

  changeDoToList() {
    this.homeService.changeDoToList();
  }

}
