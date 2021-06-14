import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  //자식 컴포넌트에서 부모 컴포넌트로 어떤 값을 전해 줄때는 @Output() 데코레이터를 써주고 EventEmitter 인스턴스를 생성해서 거기에 emit메소드의 인자로 넣어주면 된다.
  @Output() onTodoAdded = new EventEmitter();
  newText!: string;
  constructor() {}

  ngOnInit(): void {}
  addTodo(newText: string): void {
    this.onTodoAdded.emit(newText);
    this.newText = '';
  }
}
