import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TodoService } from '../todo.service';

// interface Message {
//   isCompleted: boolean;
//   Content: string;
// }

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  animations: [
    trigger('editTodoState', [
      state('editTodo_hide', style({ top: '12px' })),
      state('editTodo_show', style({ top: '-150px' })),
      transition('* => *', animate('200ms'))
    ]),
    trigger('editButtonState', [
      state('editTodo_hide', style({ background: 'green', transform: 'rotate(0deg)' })),
      state('editTodo_show', style({ background: 'red', transform: 'rotate(135deg)' })),
      transition('* => *', animate('200ms'))
    ]),
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate(300)
      ]),
      transition(':leave', [
        animate(300, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class TodoListComponent implements OnInit {
  editTodo_State = 'editTodo_hide';
  // message_list: Message[] = [];
  message_content = '';
  constructor(public todoService: TodoService) { }

  ngOnInit() { }

  changeEditDoTo() {
    this.message_content = '';
    this.editTodo_State = (this.editTodo_State === 'editTodo_hide'
      ? 'editTodo_show' : 'editTodo_hide');
  }

  onSave() {
    // [SAVE] start
    this.todoService.message_list.push({ isCompleted: false, Content: this.message_content });
    // [SAVE] end
    this.message_content = '';
    this.editTodo_State = 'editTodo_hide';
  }
}
