import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../todos/todo';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title!: String;
  description!:String;
  id!:number;

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  localStorageItem!: string;
  todoList!: Todo[] ;

  constructor() {
  }

  ngOnInit(): void {
  }

  onAdd(addTodoForm: NgForm){
    this.localStorageItem = sessionStorage.getItem("todos")!;
    this.todoList = this.localStorageItem == null? [] : JSON.parse(this.localStorageItem);
    const nextId = this.todoList.length + 1;  
    const todo = {
      id : this.todoList.find(item => item.id === nextId)? nextId + 1 : nextId,
      title: this.title,
      description: this.description,
      isActive: true
    }
    this.todoAdd.emit(todo);
    addTodoForm.reset();
  }

}
