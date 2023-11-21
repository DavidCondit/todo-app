// src/app/todo/todo.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class TodoComponent {
  newTodo: string = '';
  todos: string[] = [];

  addTodo() {
    if (this.newTodo) {
      this.todos.push(this.newTodo);
      this.newTodo = '';
    }
  }
}
