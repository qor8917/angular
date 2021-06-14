import { Component, OnInit } from '@angular/core';
import { Todo } from '../share/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  /* 프로퍼티 선언 */
  newText: string = '';
  todos: Todo[] = [];
  constructor() {
    this.todos = [
      { done: false, text: '운동하기' },
      { done: true, text: '공부하기' },
    ];
  }

  ngOnInit(): void {}

  toggleTodo(todo: any): void {
    todo.done = !todo.done;
  }
  /* 자식 컴포넌트에서 받아온 메소드 */
  addTodo(text: string): void {
    this.todos.push({
      done: false,
      text: text,
    });
  }
}
