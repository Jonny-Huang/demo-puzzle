import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {
  todolist_State = 'dotolist_hide';
  // todolist_State = 'dotolist_show';

  constructor() { }

  changeDoToList() {
    this.todolist_State = (this.todolist_State === 'dotolist_hide' ? 'dotolist_show' : 'dotolist_hide');
    // if (this.todolist_State === 'dotolist_hide') {
    //   this.todolist_State = 'dotolist_show';
    // } else {
    //   this.todolist_State = 'dotolist_hide';
    // }
  }
}
