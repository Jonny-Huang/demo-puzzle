import { Injectable } from '@angular/core';

@Injectable()
export class UserProfileService {
  // isLogin = false;
  isLogin = true; // 預設變成已登入，以略過登入畫面
  todolist_count = 10;

  constructor() { }

}
