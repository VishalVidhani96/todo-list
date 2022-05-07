import { Component, Input, OnInit, Output,  EventEmitter } from '@angular/core';
import { Todo } from '../todos/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo | undefined;
  @Output() todoRemove: EventEmitter<Todo> = new EventEmitter();
  @Output() todoDone: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(todo: Todo | undefined){
     this.todoRemove.emit(todo);
  }

  onDoneCheckedBoxClick(todo: Todo | undefined){
    this.todoDone.emit(todo);
  }
}
