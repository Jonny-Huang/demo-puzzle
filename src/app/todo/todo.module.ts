import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MdCardModule,
  MdIconModule,
  MdListModule,
  MdButtonModule,
  MdInputModule,
  MdCheckboxModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MdCardModule,
    MdIconModule,
    MdListModule,
    MdButtonModule,
    MdInputModule,
    MdCheckboxModule,
    FormsModule
  ],
  declarations: [TodoListComponent],
  exports: [TodoListComponent]
})
export class TodoModule { }
