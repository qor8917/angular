import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../share/todo.model';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  //느낌표는 타입스크립트에서 null과 undefind를 허용한다는 뜻
  @Input() todoee!: Todo;

  constructor() {}

  ngOnInit(): void {}
}
