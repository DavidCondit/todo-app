import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface TodoItem {
  content: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class TodoComponent implements OnInit {
  newTodo: string = '';
  todos: TodoItem[] = [];

  ngOnInit() {
    this.todos = JSON.parse(localStorage.getItem('todos') || '[]');
  }

  addTodo() {
    if (this.newTodo) {
      this.todos.push({ content: this.newTodo, completed: false });
      this.updateLocalStorage();
      this.newTodo = '';
    }
  }

  toggleComplete(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
    this.updateLocalStorage();
  }

  private updateLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
