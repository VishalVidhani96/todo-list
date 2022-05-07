import { Component, Input, OnInit, Output,  EventEmitter } from '@angular/core';
import { Todo } from '../todos/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  @Output() todoRemove: EventEmitter<Todo> = new EventEmitter();
  @Output() todoDone: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(todo: Todo){
     this.todoRemove.emit(todo);
  }

  onDoneCheckedBoxClick(todo: Todo){
    this.todoDone.emit(todo);
  }
}
