import { Injectable } from '@angular/core';

interface Message {
  isCompleted: boolean;
  Content: string;
}

@Injectable()
export class TodoService {
  message_list: Message[] = [];

  constructor() {
    this.message_list.push({ isCompleted: false, Content: 'To-Do List item 01' });
    this.message_list.push({ isCompleted: false, Content: 'To-Do List item 02' });
    this.message_list.push({ isCompleted: false, Content: 'To-Do List item 03' });
    // this.message_list.push({ isCompleted: false, Content: 'To-Do List item 04' });
    // this.message_list.push({ isCompleted: false, Content: 'To-Do List item 05' });
    // this.message_list.push({ isCompleted: false, Content: 'To-Do List item 06' });
    // this.message_list.push({ isCompleted: false, Content: 'To-Do List item 07' });
    // this.message_list.push({ isCompleted: false, Content: 'To-Do List item 08' });
    // this.message_list.push({ isCompleted: false, Content: 'To-Do List item 09' });
    // this.message_list.push({ isCompleted: false, Content: 'To-Do List item 10' });
  }
}

